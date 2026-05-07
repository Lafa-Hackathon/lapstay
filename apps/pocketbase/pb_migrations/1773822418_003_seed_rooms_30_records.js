/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("rooms");

  const record0 = new Record(collection);
    const record0_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Backpackers'");
    if (!record0_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Backpackers'\""); }
    record0.set("hostel_id", record0_hostel_idLookup.id);
    record0.set("room_type", "Dorm (6-bed)");
    record0.set("capacity", 6);
    record0.set("price", 400);
    record0.set("total_rooms", 8);
    record0.set("available_rooms", 5);
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
    const record1_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Backpackers'");
    if (!record1_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Backpackers'\""); }
    record1.set("hostel_id", record1_hostel_idLookup.id);
    record1.set("room_type", "Private Double");
    record1.set("capacity", 2);
    record1.set("price", 1000);
    record1.set("total_rooms", 4);
    record1.set("available_rooms", 2);
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
    const record2_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Backpackers'");
    if (!record2_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Backpackers'\""); }
    record2.set("hostel_id", record2_hostel_idLookup.id);
    record2.set("room_type", "Private Single");
    record2.set("capacity", 1);
    record2.set("price", 600);
    record2.set("total_rooms", 3);
    record2.set("available_rooms", 1);
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
    const record3_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Himalayan Retreat'");
    if (!record3_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Himalayan Retreat'\""); }
    record3.set("hostel_id", record3_hostel_idLookup.id);
    record3.set("room_type", "Dorm (4-bed)");
    record3.set("capacity", 4);
    record3.set("price", 500);
    record3.set("total_rooms", 6);
    record3.set("available_rooms", 3);
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
    const record4_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Himalayan Retreat'");
    if (!record4_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Himalayan Retreat'\""); }
    record4.set("hostel_id", record4_hostel_idLookup.id);
    record4.set("room_type", "Private Double");
    record4.set("capacity", 2);
    record4.set("price", 1200);
    record4.set("total_rooms", 5);
    record4.set("available_rooms", 2);
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
    const record5_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Himalayan Retreat'");
    if (!record5_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Himalayan Retreat'\""); }
    record5.set("hostel_id", record5_hostel_idLookup.id);
    record5.set("room_type", "Private Single");
    record5.set("capacity", 1);
    record5.set("price", 800);
    record5.set("total_rooms", 3);
    record5.set("available_rooms", 1);
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
    const record6_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside Hostel'");
    if (!record6_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside Hostel'\""); }
    record6.set("hostel_id", record6_hostel_idLookup.id);
    record6.set("room_type", "Dorm (8-bed)");
    record6.set("capacity", 8);
    record6.set("price", 350);
    record6.set("total_rooms", 10);
    record6.set("available_rooms", 6);
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
    const record7_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside Hostel'");
    if (!record7_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside Hostel'\""); }
    record7.set("hostel_id", record7_hostel_idLookup.id);
    record7.set("room_type", "Private Double");
    record7.set("capacity", 2);
    record7.set("price", 1100);
    record7.set("total_rooms", 4);
    record7.set("available_rooms", 2);
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
    const record8_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside Hostel'");
    if (!record8_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside Hostel'\""); }
    record8.set("hostel_id", record8_hostel_idLookup.id);
    record8.set("room_type", "Private Single");
    record8.set("capacity", 1);
    record8.set("price", 700);
    record8.set("total_rooms", 2);
    record8.set("available_rooms", 1);
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
    const record9_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Mountain Lodge'");
    if (!record9_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Mountain Lodge'\""); }
    record9.set("hostel_id", record9_hostel_idLookup.id);
    record9.set("room_type", "Dorm (4-bed)");
    record9.set("capacity", 4);
    record9.set("price", 550);
    record9.set("total_rooms", 7);
    record9.set("available_rooms", 4);
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
    const record10_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Mountain Lodge'");
    if (!record10_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Mountain Lodge'\""); }
    record10.set("hostel_id", record10_hostel_idLookup.id);
    record10.set("room_type", "Private Double");
    record10.set("capacity", 2);
    record10.set("price", 1300);
    record10.set("total_rooms", 5);
    record10.set("available_rooms", 3);
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
    const record11_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Mountain Lodge'");
    if (!record11_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Mountain Lodge'\""); }
    record11.set("hostel_id", record11_hostel_idLookup.id);
    record11.set("room_type", "Private Single");
    record11.set("capacity", 1);
    record11.set("price", 900);
    record11.set("total_rooms", 3);
    record11.set("available_rooms", 1);
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
    const record12_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Adventure Hub'");
    if (!record12_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Adventure Hub'\""); }
    record12.set("hostel_id", record12_hostel_idLookup.id);
    record12.set("room_type", "Dorm (6-bed)");
    record12.set("capacity", 6);
    record12.set("price", 450);
    record12.set("total_rooms", 9);
    record12.set("available_rooms", 5);
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
    const record13_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Adventure Hub'");
    if (!record13_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Adventure Hub'\""); }
    record13.set("hostel_id", record13_hostel_idLookup.id);
    record13.set("room_type", "Private Double");
    record13.set("capacity", 2);
    record13.set("price", 1050);
    record13.set("total_rooms", 4);
    record13.set("available_rooms", 2);
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
    const record14_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Adventure Hub'");
    if (!record14_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Adventure Hub'\""); }
    record14.set("hostel_id", record14_hostel_idLookup.id);
    record14.set("room_type", "Private Single");
    record14.set("capacity", 1);
    record14.set("price", 650);
    record14.set("total_rooms", 3);
    record14.set("available_rooms", 1);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    const record15_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record15_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record15.set("hostel_id", record15_hostel_idLookup.id);
    record15.set("room_type", "Dorm (4-bed)");
    record15.set("capacity", 4);
    record15.set("price", 400);
    record15.set("total_rooms", 6);
    record15.set("available_rooms", 3);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    const record16_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record16_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record16.set("hostel_id", record16_hostel_idLookup.id);
    record16.set("room_type", "Private Double");
    record16.set("capacity", 2);
    record16.set("price", 950);
    record16.set("total_rooms", 4);
    record16.set("available_rooms", 2);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    const record17_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record17_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record17.set("hostel_id", record17_hostel_idLookup.id);
    record17.set("room_type", "Private Single");
    record17.set("capacity", 1);
    record17.set("price", 550);
    record17.set("total_rooms", 2);
    record17.set("available_rooms", 1);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    const record18_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Hostel'");
    if (!record18_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Hostel'\""); }
    record18.set("hostel_id", record18_hostel_idLookup.id);
    record18.set("room_type", "Dorm (6-bed)");
    record18.set("capacity", 6);
    record18.set("price", 500);
    record18.set("total_rooms", 8);
    record18.set("available_rooms", 4);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    const record19_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Hostel'");
    if (!record19_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Hostel'\""); }
    record19.set("hostel_id", record19_hostel_idLookup.id);
    record19.set("room_type", "Private Double");
    record19.set("capacity", 2);
    record19.set("price", 1250);
    record19.set("total_rooms", 5);
    record19.set("available_rooms", 3);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    const record20_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Hostel'");
    if (!record20_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Hostel'\""); }
    record20.set("hostel_id", record20_hostel_idLookup.id);
    record20.set("room_type", "Private Single");
    record20.set("capacity", 1);
    record20.set("price", 850);
    record20.set("total_rooms", 3);
    record20.set("available_rooms", 2);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    const record21_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lakeside Hostel'");
    if (!record21_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lakeside Hostel'\""); }
    record21.set("hostel_id", record21_hostel_idLookup.id);
    record21.set("room_type", "Dorm (4-bed)");
    record21.set("capacity", 4);
    record21.set("price", 600);
    record21.set("total_rooms", 7);
    record21.set("available_rooms", 4);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    const record22_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lakeside Hostel'");
    if (!record22_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lakeside Hostel'\""); }
    record22.set("hostel_id", record22_hostel_idLookup.id);
    record22.set("room_type", "Private Double");
    record22.set("capacity", 2);
    record22.set("price", 1400);
    record22.set("total_rooms", 5);
    record22.set("available_rooms", 2);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    const record23_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lakeside Hostel'");
    if (!record23_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lakeside Hostel'\""); }
    record23.set("hostel_id", record23_hostel_idLookup.id);
    record23.set("room_type", "Private Single");
    record23.set("capacity", 1);
    record23.set("price", 950);
    record23.set("total_rooms", 3);
    record23.set("available_rooms", 1);
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    const record24_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Cozy Corner'");
    if (!record24_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Cozy Corner'\""); }
    record24.set("hostel_id", record24_hostel_idLookup.id);
    record24.set("room_type", "Dorm (4-bed)");
    record24.set("capacity", 4);
    record24.set("price", 350);
    record24.set("total_rooms", 5);
    record24.set("available_rooms", 3);
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    const record25_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Cozy Corner'");
    if (!record25_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Cozy Corner'\""); }
    record25.set("hostel_id", record25_hostel_idLookup.id);
    record25.set("room_type", "Private Double");
    record25.set("capacity", 2);
    record25.set("price", 900);
    record25.set("total_rooms", 3);
    record25.set("available_rooms", 1);
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    const record26_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Cozy Corner'");
    if (!record26_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Cozy Corner'\""); }
    record26.set("hostel_id", record26_hostel_idLookup.id);
    record26.set("room_type", "Private Single");
    record26.set("capacity", 1);
    record26.set("price", 500);
    record26.set("total_rooms", 2);
    record26.set("available_rooms", 1);
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    const record27_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Sunset View'");
    if (!record27_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Sunset View'\""); }
    record27.set("hostel_id", record27_hostel_idLookup.id);
    record27.set("room_type", "Dorm (6-bed)");
    record27.set("capacity", 6);
    record27.set("price", 420);
    record27.set("total_rooms", 7);
    record27.set("available_rooms", 4);
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record28 = new Record(collection);
    const record28_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Sunset View'");
    if (!record28_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Sunset View'\""); }
    record28.set("hostel_id", record28_hostel_idLookup.id);
    record28.set("room_type", "Private Double");
    record28.set("capacity", 2);
    record28.set("price", 1000);
    record28.set("total_rooms", 4);
    record28.set("available_rooms", 2);
  try {
    app.save(record28);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record29 = new Record(collection);
    const record29_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Sunset View'");
    if (!record29_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Sunset View'\""); }
    record29.set("hostel_id", record29_hostel_idLookup.id);
    record29.set("room_type", "Private Single");
    record29.set("capacity", 1);
    record29.set("price", 600);
    record29.set("total_rooms", 2);
    record29.set("available_rooms", 1);
  try {
    app.save(record29);
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