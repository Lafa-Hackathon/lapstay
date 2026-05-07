/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Manali Mountain Lodge");
    record0.set("location", "Manali");
    record0.set("description", "Cozy lodge with mountain views");
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Gym"]);
    record0.set("price_per_night", 800);
    record0.set("rating", 4.5);
    record0.set("capacity", 40);
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
    record1.set("name", "Dharamshala Peace House");
    record1.set("location", "Dharamshala");
    record1.set("description", "Peaceful retreat in the hills");
    record1.set("amenities", ["WiFi", "Kitchen", "Laundry", "AC"]);
    record1.set("price_per_night", 600);
    record1.set("rating", 4.7);
    record1.set("capacity", 35);
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
    record2.set("name", "Rishikesh Yoga Retreat");
    record2.set("location", "Rishikesh");
    record2.set("description", "Yoga and wellness focused");
    record2.set("amenities", ["WiFi", "Kitchen", "Heating", "Hot Water"]);
    record2.set("price_per_night", 700);
    record2.set("rating", 4.6);
    record2.set("capacity", 30);
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
    record3.set("name", "Nainital Lake View");
    record3.set("location", "Nainital");
    record3.set("description", "Lakeside hostel with stunning views");
    record3.set("amenities", ["WiFi", "Parking", "Gym", "AC"]);
    record3.set("price_per_night", 900);
    record3.set("rating", 4.8);
    record3.set("capacity", 45);
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
    record4.set("amenities", ["WiFi", "Kitchen", "Laundry", "Heating"]);
    record4.set("price_per_night", 750);
    record4.set("rating", 4.4);
    record4.set("capacity", 38);
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
    record5.set("name", "Kasol Riverside");
    record5.set("location", "Kasol");
    record5.set("description", "Riverside adventure hub");
    record5.set("amenities", ["WiFi", "Kitchen", "Parking", "Gym"]);
    record5.set("price_per_night", 550);
    record5.set("rating", 4.5);
    record5.set("capacity", 32);
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
    record6.set("name", "Auli Alpine");
    record6.set("location", "Auli");
    record6.set("description", "High altitude mountain experience");
    record6.set("amenities", ["WiFi", "Heating", "Hot Water", "AC"]);
    record6.set("price_per_night", 1000);
    record6.set("rating", 4.9);
    record6.set("capacity", 25);
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
    record7.set("name", "Chopta Cloud Walk");
    record7.set("location", "Chopta");
    record7.set("description", "Cloud-level trekking base");
    record7.set("amenities", ["WiFi", "Kitchen", "Laundry", "Gym"]);
    record7.set("price_per_night", 650);
    record7.set("rating", 4.6);
    record7.set("capacity", 28);
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