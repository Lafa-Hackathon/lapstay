/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("hostels");

  const record0 = new Record(collection);
    record0.set("name", "Manali Mountain Lodge");
    record0.set("location", "Manali, Himachal Pradesh");
    record0.set("description", "Cozy mountain lodge with stunning views of the Himalayas. Perfect for trekkers and adventure seekers.");
    record0.set("amenities", ["WiFi", "Kitchen", "Parking", "Gym"]);
    record0.set("price_per_night", 450);
    record0.set("rating", 4.5);
    record0.set("host_id", "host_001");
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
    record1.set("name", "Dharamshala Serenity");
    record1.set("location", "Dharamshala, Himachal Pradesh");
    record1.set("description", "Peaceful retreat in the foothills with meditation spaces and yoga facilities.");
    record1.set("amenities", ["WiFi", "Kitchen", "Laundry", "AC"]);
    record1.set("price_per_night", 350);
    record1.set("rating", 4.7);
    record1.set("host_id", "host_002");
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
    record2.set("location", "Rishikesh, Uttarakhand");
    record2.set("description", "Riverside hostel with direct access to the Ganges. Great for yoga and spiritual seekers.");
    record2.set("amenities", ["WiFi", "Kitchen", "Parking", "Hot Water"]);
    record2.set("price_per_night", 300);
    record2.set("rating", 4.3);
    record2.set("host_id", "host_003");
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
    record3.set("name", "Nainital Peak View");
    record3.set("location", "Nainital, Uttarakhand");
    record3.set("description", "Lakeside hostel with panoramic views of Naini Lake and surrounding mountains.");
    record3.set("amenities", ["WiFi", "Kitchen", "Laundry", "Heating"]);
    record3.set("price_per_night", 400);
    record3.set("rating", 4.6);
    record3.set("host_id", "host_004");
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
    record4.set("name", "Shimla Heritage House");
    record4.set("location", "Shimla, Himachal Pradesh");
    record4.set("description", "Historic colonial-style hostel in the heart of Shimla with easy access to Mall Road.");
    record4.set("amenities", ["WiFi", "Kitchen", "Parking", "AC"]);
    record4.set("price_per_night", 500);
    record4.set("rating", 4.4);
    record4.set("host_id", "host_005");
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
    record5.set("name", "Kasol Backpackers Haven");
    record5.set("location", "Kasol, Himachal Pradesh");
    record5.set("description", "Budget-friendly hostel popular with backpackers. Great base for Parvati Valley treks.");
    record5.set("amenities", ["WiFi", "Kitchen", "Laundry", "Gym"]);
    record5.set("price_per_night", 280);
    record5.set("rating", 4.2);
    record5.set("host_id", "host_006");
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
    record6.set("name", "Auli Alpine Resort");
    record6.set("location", "Auli, Uttarakhand");
    record6.set("description", "Mountain resort hostel near skiing slopes. Perfect for winter sports and summer trekking.");
    record6.set("amenities", ["WiFi", "Kitchen", "Parking", "Heating", "Gym"]);
    record6.set("price_per_night", 600);
    record6.set("rating", 4.8);
    record6.set("host_id", "host_007");
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
    record7.set("name", "Mussoorie Mountain Escape");
    record7.set("location", "Mussoorie, Uttarakhand");
    record7.set("description", "Charming hostel with valley views. Close to hiking trails and adventure activities.");
    record7.set("amenities", ["WiFi", "Kitchen", "Laundry", "AC", "Hot Water"]);
    record7.set("price_per_night", 380);
    record7.set("rating", 4.1);
    record7.set("host_id", "host_008");
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
    record8.set("name", "Chopta Cloud Retreat");
    record8.set("location", "Chopta, Uttarakhand");
    record8.set("description", "Secluded mountain hostel surrounded by forests. Ideal for nature lovers and bird watchers.");
    record8.set("amenities", ["WiFi", "Kitchen", "Parking", "Heating"]);
    record8.set("price_per_night", 320);
    record8.set("rating", 3.9);
    record8.set("host_id", "host_009");
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
    record9.set("name", "Kufri Adventure Base");
    record9.set("location", "Kufri, Himachal Pradesh");
    record9.set("description", "Adventure-focused hostel with activities like horse riding and paragliding nearby.");
    record9.set("amenities", ["WiFi", "Kitchen", "Parking", "Gym", "AC"]);
    record9.set("price_per_night", 420);
    record9.set("rating", 4.5);
    record9.set("host_id", "host_010");
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