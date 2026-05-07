/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("rooms");

  const record0 = new Record(collection);
    const record0_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record0_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record0.set("hostel_id", record0_hostel_idLookup.id);
    record0.set("room_type", "Dorm Room");
    record0.set("capacity", 8);
    record0.set("price", 280);
    record0.set("total_rooms", 5);
    record0.set("available_rooms", 3);
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
    const record1_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record1_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record1.set("hostel_id", record1_hostel_idLookup.id);
    record1.set("room_type", "Private Single");
    record1.set("capacity", 1);
    record1.set("price", 560);
    record1.set("total_rooms", 2);
    record1.set("available_rooms", 1);
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
    const record2_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record2_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record2.set("hostel_id", record2_hostel_idLookup.id);
    record2.set("room_type", "Private Double");
    record2.set("capacity", 2);
    record2.set("price", 720);
    record2.set("total_rooms", 3);
    record2.set("available_rooms", 2);
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
    const record3_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record3_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record3.set("hostel_id", record3_hostel_idLookup.id);
    record3.set("room_type", "Family Room");
    record3.set("capacity", 4);
    record3.set("price", 880);
    record3.set("total_rooms", 2);
    record3.set("available_rooms", 1);
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
    const record4_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace House'");
    if (!record4_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace House'\""); }
    record4.set("hostel_id", record4_hostel_idLookup.id);
    record4.set("room_type", "Dorm Room");
    record4.set("capacity", 6);
    record4.set("price", 210);
    record4.set("total_rooms", 4);
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
    const record5_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace House'");
    if (!record5_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace House'\""); }
    record5.set("hostel_id", record5_hostel_idLookup.id);
    record5.set("room_type", "Private Single");
    record5.set("capacity", 1);
    record5.set("price", 420);
    record5.set("total_rooms", 2);
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
    const record6_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace House'");
    if (!record6_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace House'\""); }
    record6.set("hostel_id", record6_hostel_idLookup.id);
    record6.set("room_type", "Private Double");
    record6.set("capacity", 2);
    record6.set("price", 540);
    record6.set("total_rooms", 3);
    record6.set("available_rooms", 1);
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
    const record7_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace House'");
    if (!record7_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace House'\""); }
    record7.set("hostel_id", record7_hostel_idLookup.id);
    record7.set("room_type", "Family Room");
    record7.set("capacity", 4);
    record7.set("price", 660);
    record7.set("total_rooms", 2);
    record7.set("available_rooms", 1);
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
    const record8_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Retreat'");
    if (!record8_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Retreat'\""); }
    record8.set("hostel_id", record8_hostel_idLookup.id);
    record8.set("room_type", "Dorm Room");
    record8.set("capacity", 7);
    record8.set("price", 245);
    record8.set("total_rooms", 4);
    record8.set("available_rooms", 2);
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
    const record9_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Retreat'");
    if (!record9_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Retreat'\""); }
    record9.set("hostel_id", record9_hostel_idLookup.id);
    record9.set("room_type", "Private Single");
    record9.set("capacity", 1);
    record9.set("price", 490);
    record9.set("total_rooms", 2);
    record9.set("available_rooms", 1);
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
    const record10_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Retreat'");
    if (!record10_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Retreat'\""); }
    record10.set("hostel_id", record10_hostel_idLookup.id);
    record10.set("room_type", "Private Double");
    record10.set("capacity", 2);
    record10.set("price", 630);
    record10.set("total_rooms", 3);
    record10.set("available_rooms", 2);
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
    const record11_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Yoga Retreat'");
    if (!record11_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Yoga Retreat'\""); }
    record11.set("hostel_id", record11_hostel_idLookup.id);
    record11.set("room_type", "Family Room");
    record11.set("capacity", 4);
    record11.set("price", 770);
    record11.set("total_rooms", 2);
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
    const record12_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record12_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record12.set("hostel_id", record12_hostel_idLookup.id);
    record12.set("room_type", "Dorm Room");
    record12.set("capacity", 8);
    record12.set("price", 315);
    record12.set("total_rooms", 6);
    record12.set("available_rooms", 3);
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
    const record13_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record13_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record13.set("hostel_id", record13_hostel_idLookup.id);
    record13.set("room_type", "Private Single");
    record13.set("capacity", 1);
    record13.set("price", 630);
    record13.set("total_rooms", 3);
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
    const record14_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record14_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record14.set("hostel_id", record14_hostel_idLookup.id);
    record14.set("room_type", "Private Double");
    record14.set("capacity", 2);
    record14.set("price", 810);
    record14.set("total_rooms", 4);
    record14.set("available_rooms", 2);
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
    const record15_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record15_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record15.set("hostel_id", record15_hostel_idLookup.id);
    record15.set("room_type", "Family Room");
    record15.set("capacity", 4);
    record15.set("price", 990);
    record15.set("total_rooms", 2);
    record15.set("available_rooms", 1);
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
    const record16_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record16_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record16.set("hostel_id", record16_hostel_idLookup.id);
    record16.set("room_type", "Dorm Room");
    record16.set("capacity", 6);
    record16.set("price", 262);
    record16.set("total_rooms", 5);
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
    const record17_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record17_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record17.set("hostel_id", record17_hostel_idLookup.id);
    record17.set("room_type", "Private Single");
    record17.set("capacity", 1);
    record17.set("price", 525);
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
    const record18_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record18_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record18.set("hostel_id", record18_hostel_idLookup.id);
    record18.set("room_type", "Private Double");
    record18.set("capacity", 2);
    record18.set("price", 675);
    record18.set("total_rooms", 3);
    record18.set("available_rooms", 2);
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
    const record19_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record19_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record19.set("hostel_id", record19_hostel_idLookup.id);
    record19.set("room_type", "Family Room");
    record19.set("capacity", 4);
    record19.set("price", 825);
    record19.set("total_rooms", 2);
    record19.set("available_rooms", 1);
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
    const record20_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Kasol Riverside'");
    if (!record20_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Kasol Riverside'\""); }
    record20.set("hostel_id", record20_hostel_idLookup.id);
    record20.set("room_type", "Dorm Room");
    record20.set("capacity", 7);
    record20.set("price", 192);
    record20.set("total_rooms", 4);
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
    const record21_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Kasol Riverside'");
    if (!record21_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Kasol Riverside'\""); }
    record21.set("hostel_id", record21_hostel_idLookup.id);
    record21.set("room_type", "Private Single");
    record21.set("capacity", 1);
    record21.set("price", 385);
    record21.set("total_rooms", 2);
    record21.set("available_rooms", 1);
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
    const record22_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Kasol Riverside'");
    if (!record22_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Kasol Riverside'\""); }
    record22.set("hostel_id", record22_hostel_idLookup.id);
    record22.set("room_type", "Private Double");
    record22.set("capacity", 2);
    record22.set("price", 495);
    record22.set("total_rooms", 3);
    record22.set("available_rooms", 1);
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
    const record23_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Kasol Riverside'");
    if (!record23_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Kasol Riverside'\""); }
    record23.set("hostel_id", record23_hostel_idLookup.id);
    record23.set("room_type", "Family Room");
    record23.set("capacity", 4);
    record23.set("price", 605);
    record23.set("total_rooms", 2);
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
    const record24_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record24_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record24.set("hostel_id", record24_hostel_idLookup.id);
    record24.set("room_type", "Dorm Room");
    record24.set("capacity", 8);
    record24.set("price", 350);
    record24.set("total_rooms", 4);
    record24.set("available_rooms", 2);
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
    const record25_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record25_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record25.set("hostel_id", record25_hostel_idLookup.id);
    record25.set("room_type", "Private Single");
    record25.set("capacity", 1);
    record25.set("price", 700);
    record25.set("total_rooms", 2);
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
    const record26_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record26_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record26.set("hostel_id", record26_hostel_idLookup.id);
    record26.set("room_type", "Private Double");
    record26.set("capacity", 2);
    record26.set("price", 900);
    record26.set("total_rooms", 3);
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
    const record27_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Walk'");
    if (!record27_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Walk'\""); }
    record27.set("hostel_id", record27_hostel_idLookup.id);
    record27.set("room_type", "Dorm Room");
    record27.set("capacity", 6);
    record27.set("price", 227);
    record27.set("total_rooms", 4);
    record27.set("available_rooms", 2);
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
    const record28_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Walk'");
    if (!record28_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Walk'\""); }
    record28.set("hostel_id", record28_hostel_idLookup.id);
    record28.set("room_type", "Private Single");
    record28.set("capacity", 1);
    record28.set("price", 455);
    record28.set("total_rooms", 2);
    record28.set("available_rooms", 1);
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
    const record29_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Walk'");
    if (!record29_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Walk'\""); }
    record29.set("hostel_id", record29_hostel_idLookup.id);
    record29.set("room_type", "Private Double");
    record29.set("capacity", 2);
    record29.set("price", 585);
    record29.set("total_rooms", 3);
    record29.set("available_rooms", 2);
  try {
    app.save(record29);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record30 = new Record(collection);
    const record30_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Walk'");
    if (!record30_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Walk'\""); }
    record30.set("hostel_id", record30_hostel_idLookup.id);
    record30.set("room_type", "Family Room");
    record30.set("capacity", 4);
    record30.set("price", 715);
    record30.set("total_rooms", 2);
    record30.set("available_rooms", 1);
  try {
    app.save(record30);
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