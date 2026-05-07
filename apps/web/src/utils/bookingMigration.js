import PocketBase from 'pocketbase';

const q = (value = '') => {
  return String(value ?? '').replace(/"/g, '\\"');
};

const getPbError = (err) => {
  return (
    err?.response?.message ||
    err?.message ||
    JSON.stringify(err?.response || err)
  );
};

export const migrateBookingsDevToLive = async () => {
  const devUrl =
    import.meta.env.VITE_DEV_POCKETBASE_URL ||
    'http://localhost:8090';

  const liveUrl =
    import.meta.env.VITE_LIVE_POCKETBASE_URL ||
    'https://production.your-pocketbase.com';

  const devPb = new PocketBase(devUrl);
  const livePb = new PocketBase(liveUrl);

  const result = {
    success: false,
    copied: 0,
    skipped: 0,
    errors: [],
  };

  try {
    // Fetch all bookings from Dev
    const devBookings = await devPb.collection('bookings').getFullList({
      sort: 'created',
      requestKey: null,
    });

    // Loop through bookings
    for (const booking of devBookings) {
      try {
        // Check existing booking
        const existingBookings = await livePb
          .collection('bookings')
          .getList(1, 1, {
            filter: `user_id="${q(
              booking.user_id
            )}" && room_id="${q(
              booking.room_id
            )}" && check_in="${q(
              booking.check_in
            )}" && check_out="${q(
              booking.check_out
            )}"`,
            requestKey: null,
          });

        // Skip duplicate
        if (existingBookings.items.length > 0) {
          result.skipped++;
          continue;
        }

        // Create booking
        const newBookingData = {
          user_id: booking.user_id,
          room_id: booking.room_id,
          hostel_id: booking.hostel_id,
          check_in: booking.check_in,
          check_out: booking.check_out,
          guests: booking.guests,
          total_price: booking.total_price,
          status: booking.status,
          stripe_session_id: booking.stripe_session_id || '',
        };

        await livePb.collection('bookings').create(newBookingData, {
          requestKey: null,
        });

        result.copied++;
      } catch (err) {
        console.error(`Error migrating booking ${booking.id}:`, err);

        result.errors.push(
          `Failed to migrate booking ${booking.id}: ${getPbError(err)}`
        );
      }
    }

    result.success = result.errors.length === 0;
  } catch (error) {
    console.error('Migration failed:', error);

    result.errors.push(
      `Migration script error: ${getPbError(error)}`
    );

    result.success = false;
  }

  return result;
};

export const migrateHostelsDevToLive = async () => {
  const devUrl =
    import.meta.env.VITE_DEV_POCKETBASE_URL ||
    'http://localhost:8090';

  const liveUrl =
    import.meta.env.VITE_LIVE_POCKETBASE_URL ||
    'https://production.your-pocketbase.com';

  const devPb = new PocketBase(devUrl);
  const livePb = new PocketBase(liveUrl);

  const result = {
    success: false,
    copied: 0,
    skipped: 0,
    errors: [],
  };

  try {
    // Fetch all hostels from Dev
    const devHostels = await devPb.collection('hostels').getFullList({
      sort: 'created',
      requestKey: null,
    });

    // Loop through hostels
    for (const hostel of devHostels) {
      try {
        // Check existing hostel
        const existingHostels = await livePb
          .collection('hostels')
          .getList(1, 1, {
            filter: `name="${q(hostel.name)}" && location="${q(hostel.location)}"`,
            requestKey: null,
          });

        // Skip duplicate
        if (existingHostels.items.length > 0) {
          result.skipped++;
          continue;
        }

        // Create hostel
        const newHostelData = {
          name: hostel.name,
          location: hostel.location,
          description: hostel.description,
          amenities: hostel.amenities,
          price_per_night: hostel.price_per_night,
          rating: hostel.rating,
          images: hostel.images, // Note: images might not copy properly across servers
          host_id: hostel.host_id,
        };

        await livePb.collection('hostels').create(newHostelData, {
          requestKey: null,
        });

        result.copied++;
      } catch (err) {
        console.error(`Error migrating hostel ${hostel.id}:`, err);

        result.errors.push(
          `Failed to migrate hostel ${hostel.id}: ${getPbError(err)}`
        );
      }
    }

    result.success = result.errors.length === 0;
  } catch (error) {
    console.error('Migration failed:', error);

    result.errors.push(
      `Migration script error: ${getPbError(error)}`
    );

    result.success = false;
  }

  return result;
};