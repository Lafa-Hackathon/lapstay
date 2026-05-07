/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("reviews");

  const record0 = new Record(collection);
    const record0_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record0_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record0.set("user_id", record0_user_idLookup.id);
    const record0_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record0_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record0.set("hostel_id", record0_hostel_idLookup.id);
    record0.set("rating", 5);
    record0.set("comment", "Absolutely stunning views and excellent hospitality! The staff was very helpful and the rooms were clean and comfortable.");
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
    const record1_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record1_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record1.set("user_id", record1_user_idLookup.id);
    const record1_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record1_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record1.set("hostel_id", record1_hostel_idLookup.id);
    record1.set("rating", 4);
    record1.set("comment", "Great location for meditation and yoga. The kitchen facilities are excellent for cooking your own meals.");
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
    const record2_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record2_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record2.set("user_id", record2_user_idLookup.id);
    const record2_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside'");
    if (!record2_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside'\""); }
    record2.set("hostel_id", record2_hostel_idLookup.id);
    record2.set("rating", 5);
    record2.set("comment", "Perfect for spiritual seekers. The riverside location is magical and the yoga classes are fantastic!");
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
    const record3_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record3_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record3.set("user_id", record3_user_idLookup.id);
    const record3_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record3_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record3.set("hostel_id", record3_hostel_idLookup.id);
    record3.set("rating", 4);
    record3.set("comment", "Beautiful lake views and peaceful atmosphere. Would definitely recommend for a relaxing getaway.");
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
    const record4_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record4_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record4.set("user_id", record4_user_idLookup.id);
    const record4_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record4_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record4.set("hostel_id", record4_hostel_idLookup.id);
    record4.set("rating", 5);
    record4.set("comment", "Charming colonial architecture with modern amenities. The location is perfect for exploring Shimla.");
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
    const record5_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record5_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record5.set("user_id", record5_user_idLookup.id);
    const record5_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record5_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record5.set("hostel_id", record5_hostel_idLookup.id);
    record5.set("rating", 5);
    record5.set("comment", "Excellent for skiing and mountain sports. The staff is knowledgeable and very accommodating.");
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
    const record6_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record6_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record6.set("user_id", record6_user_idLookup.id);
    const record6_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Mussoorie Hilltop'");
    if (!record6_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Mussoorie Hilltop'\""); }
    record6.set("hostel_id", record6_hostel_idLookup.id);
    record6.set("rating", 4);
    record6.set("comment", "Amazing hilltop location with breathtaking views. Great place to unwind and enjoy nature.");
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
    const record7_user_idLookup = app.findFirstRecordByFilter("users", "email='user@mangalmaya.com'");
    if (!record7_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='user@mangalmaya.com'\""); }
    record7.set("user_id", record7_user_idLookup.id);
    const record7_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Retreat'");
    if (!record7_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Retreat'\""); }
    record7.set("hostel_id", record7_hostel_idLookup.id);
    record7.set("rating", 5);
    record7.set("comment", "Absolutely magical! The misty clouds and trekking opportunities are incredible. Highly recommended!");
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
    const record8_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record8_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record8.set("user_id", record8_user_idLookup.id);
    const record8_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record8_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record8.set("hostel_id", record8_hostel_idLookup.id);
    record8.set("rating", 4);
    record8.set("comment", "Great value for money. The common areas are perfect for meeting other travelers.");
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
    const record9_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record9_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record9.set("user_id", record9_user_idLookup.id);
    const record9_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record9_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record9.set("hostel_id", record9_hostel_idLookup.id);
    record9.set("rating", 5);
    record9.set("comment", "Peaceful and welcoming atmosphere. The gym facilities are a nice bonus.");
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    const record10_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record10_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record10.set("user_id", record10_user_idLookup.id);
    const record10_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside'");
    if (!record10_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside'\""); }
    record10.set("hostel_id", record10_hostel_idLookup.id);
    record10.set("rating", 4);
    record10.set("comment", "Wonderful riverside setting. The yoga instructors are very professional and experienced.");
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    const record11_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record11_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record11.set("user_id", record11_user_idLookup.id);
    const record11_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record11_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record11.set("hostel_id", record11_hostel_idLookup.id);
    record11.set("rating", 5);
    record11.set("comment", "Stunning lake views from the rooms. The AC is a lifesaver during warm months.");
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    const record12_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record12_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record12.set("user_id", record12_user_idLookup.id);
    const record12_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record12_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record12.set("hostel_id", record12_hostel_idLookup.id);
    record12.set("rating", 4);
    record12.set("comment", "Beautiful heritage property with excellent service. Perfect for a romantic getaway.");
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    const record13_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record13_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record13.set("user_id", record13_user_idLookup.id);
    const record13_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record13_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record13.set("hostel_id", record13_hostel_idLookup.id);
    record13.set("rating", 5);
    record13.set("comment", "Premium experience at reasonable prices. The heating system keeps you warm in winter.");
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    const record14_user_idLookup = app.findFirstRecordByFilter("users", "email='admin@mangalmaya.com'");
    if (!record14_user_idLookup) { throw new Error("Lookup failed for user_id: no record in 'users' matching \"email='admin@mangalmaya.com'\""); }
    record14.set("user_id", record14_user_idLookup.id);
    const record14_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Retreat'");
    if (!record14_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Retreat'\""); }
    record14.set("hostel_id", record14_hostel_idLookup.id);
    record14.set("rating", 5);
    record14.set("comment", "Unforgettable experience in the clouds. The trekking guides are knowledgeable and friendly.");
  try {
    app.save(record14);
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