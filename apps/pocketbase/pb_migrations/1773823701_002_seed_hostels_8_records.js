/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Everest Base Camp Lodge");
    record0.set("location", "Lukla");
    record0.set("description", "Premium hostel near Everest Base Camp with excellent amenities");
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym", "AC", "Heating", "Hot Water"]);
    record0.set("price_per_night", 45);
    record0.set("rating", 4.8);
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
    record1.set("name", "Annapurna Retreat");
    record1.set("location", "Pokhara");
    record1.set("description", "Scenic hostel with views of Annapurna mountains");
    record1.set("amenities", ["WiFi", "Kitchen", "Laundry", "Gym", "Heating", "Hot Water"]);
    record1.set("price_per_night", 35);
    record1.set("rating", 4.6);
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
    record2.set("name", "Manali Mountain Hostel");
    record2.set("location", "Manali");
    record2.set("description", "Cozy mountain hostel in the heart of Manali");
    record2.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym", "AC", "Hot Water"]);
    record2.set("price_per_night", 30);
    record2.set("rating", 4.5);
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
    record3.set("name", "Dharamshala Peace House");
    record3.set("location", "Dharamshala");
    record3.set("description", "Peaceful hostel with spiritual vibes");
    record3.set("amenities", ["WiFi", "Kitchen", "Laundry", "Gym", "Heating", "Hot Water"]);
    record3.set("price_per_night", 25);
    record3.set("rating", 4.7);
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
    record4.set("name", "Rishikesh Riverside");
    record4.set("location", "Rishikesh");
    record4.set("description", "Riverside hostel perfect for yoga and meditation");
    record4.set("amenities", ["WiFi", "Kitchen", "Laundry", "Gym", "Hot Water"]);
    record4.set("price_per_night", 20);
    record4.set("rating", 4.4);
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
    record5.set("name", "Nainital Lake View");
    record5.set("location", "Nainital");
    record5.set("description", "Beautiful hostel with stunning lake views");
    record5.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym", "AC", "Heating", "Hot Water"]);
    record5.set("price_per_night", 40);
    record5.set("rating", 4.9);
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
    record6.set("name", "Shimla Heritage Hostel");
    record6.set("location", "Shimla");
    record6.set("description", "Historic hostel in the charming hill station");
    record6.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym", "Heating", "Hot Water"]);
    record6.set("price_per_night", 28);
    record6.set("rating", 4.6);
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
    record7.set("name", "Auli Snow Peak");
    record7.set("location", "Auli");
    record7.set("description", "Premium ski resort hostel with winter sports facilities");
    record7.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry", "Gym", "AC", "Heating", "Hot Water"]);
    record7.set("price_per_night", 50);
    record7.set("rating", 4.8);
  try {
    app.save(record7);
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