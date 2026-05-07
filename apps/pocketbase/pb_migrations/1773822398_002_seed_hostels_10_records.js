/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Manali Backpackers");
    record0.set("location", "Manali");
    record0.set("description", "Budget-friendly hostel in the heart of Manali with stunning mountain views and a vibrant social atmosphere. Perfect for backpackers and adventure seekers.");
    record0.set("price_per_night", 600);
    record0.set("rating", 4.5);
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry"]);
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.set("name", "Dharamshala Himalayan Retreat");
    record1.set("location", "Dharamshala");
    record1.set("description", "Peaceful hostel nestled in the Himalayas offering yoga classes, meditation sessions, and breathtaking views of the valley.");
    record1.set("price_per_night", 800);
    record1.set("rating", 4.6);
    record1.set("amenities", ["WiFi", "Kitchen", "Gym", "AC"]);
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.set("name", "Rishikesh Riverside Hostel");
    record2.set("location", "Rishikesh");
    record2.set("description", "Riverside hostel with direct access to the Ganges. Great for yoga enthusiasts and spiritual travelers seeking authentic experiences.");
    record2.set("price_per_night", 700);
    record2.set("rating", 4.3);
    record2.set("amenities", ["WiFi", "Kitchen", "Heating", "Hot Water"]);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.set("name", "Nainital Mountain Lodge");
    record3.set("location", "Nainital");
    record3.set("description", "Cozy mountain lodge overlooking Naini Lake with comfortable rooms and excellent hospitality. Ideal for nature lovers.");
    record3.set("price_per_night", 900);
    record3.set("rating", 4.7);
    record3.set("amenities", ["WiFi", "Parking", "Gym", "AC"]);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.set("name", "Manali Adventure Hub");
    record4.set("location", "Manali");
    record4.set("description", "Adventure-focused hostel offering trekking, paragliding, and rock climbing packages. Perfect base for outdoor enthusiasts.");
    record4.set("price_per_night", 750);
    record4.set("rating", 4.4);
    record4.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym"]);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.set("name", "Dharamshala Peace Hostel");
    record5.set("location", "Dharamshala");
    record5.set("description", "Serene hostel promoting wellness and mindfulness with organic meals and peaceful surroundings.");
    record5.set("price_per_night", 650);
    record5.set("rating", 4.2);
    record5.set("amenities", ["WiFi", "Kitchen", "AC", "Heating"]);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.set("name", "Rishikesh Yoga Hostel");
    record6.set("location", "Rishikesh");
    record6.set("description", "Dedicated yoga hostel with daily classes, meditation sessions, and ayurvedic treatments. A spiritual sanctuary.");
    record6.set("price_per_night", 850);
    record6.set("rating", 4.8);
    record6.set("amenities", ["WiFi", "Kitchen", "Gym", "Hot Water"]);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.set("name", "Nainital Lakeside Hostel");
    record7.set("location", "Nainital");
    record7.set("description", "Lakeside location with water sports facilities and scenic views. Perfect for a relaxing getaway.");
    record7.set("price_per_night", 1000);
    record7.set("rating", 4.5);
    record7.set("amenities", ["WiFi", "Parking", "Laundry", "AC"]);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.set("name", "Manali Cozy Corner");
    record8.set("location", "Manali");
    record8.set("description", "Intimate hostel with personalized service and home-cooked meals. A warm welcome awaits every guest.");
    record8.set("price_per_night", 550);
    record8.set("rating", 4.1);
    record8.set("amenities", ["WiFi", "Kitchen", "Heating", "Hot Water"]);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.set("name", "Dharamshala Sunset View");
    record9.set("location", "Dharamshala");
    record9.set("description", "Hostel with panoramic sunset views and rooftop seating area. Great for socializing and enjoying nature.");
    record9.set("price_per_night", 700);
    record9.set("rating", 3.9);
    record9.set("amenities", ["WiFi", "Kitchen", "Parking", "AC"]);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  // Rollback: record IDs not known, manual cleanup needed
})