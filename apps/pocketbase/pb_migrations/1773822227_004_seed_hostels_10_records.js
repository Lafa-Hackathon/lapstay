/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Manali Mountain Lodge");
    record0.set("location", "Manali");
    record0.set("description", "Cozy lodge with mountain views");
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry"]);
    record0.set("price_per_night", 500);
    record0.set("rating", 4.5);
    record0.set("host_id", "admin_placeholder_001");
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
    record1.set("name", "Dharamshala Retreat");
    record1.set("location", "Dharamshala");
    record1.set("description", "Peaceful hostel in the hills");
    record1.set("amenities", ["WiFi", "Kitchen", "Gym"]);
    record1.set("price_per_night", 400);
    record1.set("rating", 4.7);
    record1.set("host_id", "admin_placeholder_001");
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
    record2.set("name", "Rishikesh Riverside");
    record2.set("location", "Rishikesh");
    record2.set("description", "Yoga-friendly hostel by the Ganges");
    record2.set("amenities", ["WiFi", "Kitchen", "Laundry"]);
    record2.set("price_per_night", 350);
    record2.set("rating", 4.3);
    record2.set("host_id", "admin_placeholder_001");
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
    record3.set("name", "Nainital Lakeside");
    record3.set("location", "Nainital");
    record3.set("description", "Beautiful lake views");
    record3.set("amenities", ["WiFi", "Parking", "AC"]);
    record3.set("price_per_night", 550);
    record3.set("rating", 4.6);
    record3.set("host_id", "admin_placeholder_001");
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
    record4.set("name", "Shimla Heritage");
    record4.set("location", "Shimla");
    record4.set("description", "Historic building with modern amenities");
    record4.set("amenities", ["WiFi", "Kitchen", "Heating"]);
    record4.set("price_per_night", 480);
    record4.set("rating", 4.4);
    record4.set("host_id", "admin_placeholder_001");
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
    record5.set("name", "Kasol Backpackers");
    record5.set("location", "Kasol");
    record5.set("description", "Budget-friendly mountain escape");
    record5.set("amenities", ["WiFi", "Kitchen", "Laundry"]);
    record5.set("price_per_night", 300);
    record5.set("rating", 4.2);
    record5.set("host_id", "admin_placeholder_001");
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
    record6.set("name", "Auli Alpine Lodge");
    record6.set("location", "Auli");
    record6.set("description", "Ski resort hostel with stunning views");
    record6.set("amenities", ["WiFi", "Heating", "AC"]);
    record6.set("price_per_night", 600);
    record6.set("rating", 4.8);
    record6.set("host_id", "admin_placeholder_001");
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
    record7.set("name", "Mussoorie Mountain View");
    record7.set("location", "Mussoorie");
    record7.set("description", "Hilltop hostel with panoramic views");
    record7.set("amenities", ["WiFi", "Kitchen", "Parking", "Gym"]);
    record7.set("price_per_night", 520);
    record7.set("rating", 4.5);
    record7.set("host_id", "admin_placeholder_001");
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
    record8.set("name", "Chopta Cloud Hostel");
    record8.set("location", "Chopta");
    record8.set("description", "Misty mountain retreat");
    record8.set("amenities", ["WiFi", "Kitchen", "Laundry"]);
    record8.set("price_per_night", 380);
    record8.set("rating", 4.4);
    record8.set("host_id", "admin_placeholder_001");
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
    record9.set("name", "Tosh Valley Escape");
    record9.set("location", "Tosh");
    record9.set("description", "Remote mountain village hostel");
    record9.set("amenities", ["WiFi", "Kitchen"]);
    record9.set("price_per_night", 320);
    record9.set("rating", 4.3);
    record9.set("host_id", "admin_placeholder_001");
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