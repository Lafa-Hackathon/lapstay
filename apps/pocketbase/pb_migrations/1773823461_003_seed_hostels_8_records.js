/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Manali Mountain Lodge");
    record0.set("location", "Manali");
    record0.set("description", "A cozy mountain lodge nestled in the heart of Manali with stunning Himalayan views. Perfect for adventure seekers and nature lovers.");
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Laundry"]);
    record0.set("price_per_night", 500);
    record0.set("rating", 4.5);
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
    record1.set("name", "Dharamshala Peace Hostel");
    record1.set("location", "Dharamshala");
    record1.set("description", "Peaceful hostel in the serene town of Dharamshala, ideal for meditation and relaxation with mountain backdrop.");
    record1.set("amenities", ["WiFi", "Kitchen", "Gym"]);
    record1.set("price_per_night", 400);
    record1.set("rating", 4.3);
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
    record2.set("description", "Riverside hostel in the spiritual capital of India, offering yoga classes and wellness programs.");
    record2.set("amenities", ["WiFi", "Kitchen"]);
    record2.set("price_per_night", 350);
    record2.set("rating", 4.7);
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
    record3.set("description", "Beautiful lakeside hostel with panoramic views of Nainital Lake and surrounding hills.");
    record3.set("amenities", ["WiFi", "Parking", "AC"]);
    record3.set("price_per_night", 450);
    record3.set("rating", 4.4);
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
    record4.set("description", "Historic hostel in the charming hill station of Shimla, blending colonial architecture with modern comfort.");
    record4.set("amenities", ["WiFi", "Kitchen", "Heating"]);
    record4.set("price_per_night", 480);
    record4.set("rating", 4.6);
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
    record5.set("name", "Auli Alpine");
    record5.set("location", "Auli");
    record5.set("description", "Premium alpine hostel at high altitude, perfect for skiing and mountain sports enthusiasts.");
    record5.set("amenities", ["WiFi", "Parking", "Heating"]);
    record5.set("price_per_night", 550);
    record5.set("rating", 4.8);
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
    record6.set("name", "Mussoorie Hilltop");
    record6.set("location", "Mussoorie");
    record6.set("description", "Hilltop hostel offering breathtaking views of the Doon Valley and surrounding Himalayan peaks.");
    record6.set("amenities", ["WiFi", "Kitchen", "Laundry"]);
    record6.set("price_per_night", 420);
    record6.set("rating", 4.5);
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
    record7.set("name", "Chopta Cloud Retreat");
    record7.set("location", "Chopta");
    record7.set("description", "Secluded cloud-wrapped hostel in the misty hills of Chopta, ideal for trekking and nature exploration.");
    record7.set("amenities", ["WiFi", "Kitchen", "Parking"]);
    record7.set("price_per_night", 380);
    record7.set("rating", 4.9);
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