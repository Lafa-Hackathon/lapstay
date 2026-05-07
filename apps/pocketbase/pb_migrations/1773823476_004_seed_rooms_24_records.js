/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("rooms");

  const record0 = new Record(collection);
    const record0_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Manali Mountain Lodge'");
    if (!record0_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Manali Mountain Lodge'\""); }
    record0.set("hostel_id", record0_hostel_idLookup.id);
    record0.set("room_type", "Dorm");
    record0.set("capacity", 4);
    record0.set("price", 500);
    record0.set("total_rooms", 10);
    record0.set("available_rooms", 8);
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
    record1.set("room_type", "Private Double");
    record1.set("capacity", 2);
    record1.set("price", 1200);
    record1.set("total_rooms", 10);
    record1.set("available_rooms", 8);
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
    record2.set("room_type", "Private Single");
    record2.set("capacity", 1);
    record2.set("price", 800);
    record2.set("total_rooms", 10);
    record2.set("available_rooms", 8);
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
    const record3_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record3_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record3.set("hostel_id", record3_hostel_idLookup.id);
    record3.set("room_type", "Dorm");
    record3.set("capacity", 4);
    record3.set("price", 400);
    record3.set("total_rooms", 10);
    record3.set("available_rooms", 8);
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
    const record4_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record4_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record4.set("hostel_id", record4_hostel_idLookup.id);
    record4.set("room_type", "Private Double");
    record4.set("capacity", 2);
    record4.set("price", 1000);
    record4.set("total_rooms", 10);
    record4.set("available_rooms", 8);
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
    const record5_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Dharamshala Peace Hostel'");
    if (!record5_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Dharamshala Peace Hostel'\""); }
    record5.set("hostel_id", record5_hostel_idLookup.id);
    record5.set("room_type", "Private Single");
    record5.set("capacity", 1);
    record5.set("price", 650);
    record5.set("total_rooms", 10);
    record5.set("available_rooms", 8);
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
    const record6_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside'");
    if (!record6_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside'\""); }
    record6.set("hostel_id", record6_hostel_idLookup.id);
    record6.set("room_type", "Dorm");
    record6.set("capacity", 4);
    record6.set("price", 350);
    record6.set("total_rooms", 10);
    record6.set("available_rooms", 8);
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
    const record7_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside'");
    if (!record7_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside'\""); }
    record7.set("hostel_id", record7_hostel_idLookup.id);
    record7.set("room_type", "Private Double");
    record7.set("capacity", 2);
    record7.set("price", 900);
    record7.set("total_rooms", 10);
    record7.set("available_rooms", 8);
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
    const record8_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Rishikesh Riverside'");
    if (!record8_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Rishikesh Riverside'\""); }
    record8.set("hostel_id", record8_hostel_idLookup.id);
    record8.set("room_type", "Private Single");
    record8.set("capacity", 1);
    record8.set("price", 600);
    record8.set("total_rooms", 10);
    record8.set("available_rooms", 8);
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
    const record9_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record9_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record9.set("hostel_id", record9_hostel_idLookup.id);
    record9.set("room_type", "Dorm");
    record9.set("capacity", 4);
    record9.set("price", 450);
    record9.set("total_rooms", 10);
    record9.set("available_rooms", 8);
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
    const record10_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record10_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record10.set("hostel_id", record10_hostel_idLookup.id);
    record10.set("room_type", "Private Double");
    record10.set("capacity", 2);
    record10.set("price", 1100);
    record10.set("total_rooms", 10);
    record10.set("available_rooms", 8);
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
    const record11_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Nainital Lake View'");
    if (!record11_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Nainital Lake View'\""); }
    record11.set("hostel_id", record11_hostel_idLookup.id);
    record11.set("room_type", "Private Single");
    record11.set("capacity", 1);
    record11.set("price", 750);
    record11.set("total_rooms", 10);
    record11.set("available_rooms", 8);
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
    const record12_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record12_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record12.set("hostel_id", record12_hostel_idLookup.id);
    record12.set("room_type", "Dorm");
    record12.set("capacity", 4);
    record12.set("price", 480);
    record12.set("total_rooms", 10);
    record12.set("available_rooms", 8);
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
    const record13_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record13_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record13.set("hostel_id", record13_hostel_idLookup.id);
    record13.set("room_type", "Private Double");
    record13.set("capacity", 2);
    record13.set("price", 1150);
    record13.set("total_rooms", 10);
    record13.set("available_rooms", 8);
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
    const record14_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Shimla Heritage'");
    if (!record14_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Shimla Heritage'\""); }
    record14.set("hostel_id", record14_hostel_idLookup.id);
    record14.set("room_type", "Private Single");
    record14.set("capacity", 1);
    record14.set("price", 780);
    record14.set("total_rooms", 10);
    record14.set("available_rooms", 8);
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
    const record15_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record15_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record15.set("hostel_id", record15_hostel_idLookup.id);
    record15.set("room_type", "Dorm");
    record15.set("capacity", 4);
    record15.set("price", 550);
    record15.set("total_rooms", 10);
    record15.set("available_rooms", 8);
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
    const record16_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record16_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record16.set("hostel_id", record16_hostel_idLookup.id);
    record16.set("room_type", "Private Double");
    record16.set("capacity", 2);
    record16.set("price", 1300);
    record16.set("total_rooms", 10);
    record16.set("available_rooms", 8);
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
    const record17_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Auli Alpine'");
    if (!record17_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Auli Alpine'\""); }
    record17.set("hostel_id", record17_hostel_idLookup.id);
    record17.set("room_type", "Private Single");
    record17.set("capacity", 1);
    record17.set("price", 850);
    record17.set("total_rooms", 10);
    record17.set("available_rooms", 8);
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
    const record18_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Mussoorie Hilltop'");
    if (!record18_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Mussoorie Hilltop'\""); }
    record18.set("hostel_id", record18_hostel_idLookup.id);
    record18.set("room_type", "Dorm");
    record18.set("capacity", 4);
    record18.set("price", 420);
    record18.set("total_rooms", 10);
    record18.set("available_rooms", 8);
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
    const record19_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Mussoorie Hilltop'");
    if (!record19_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Mussoorie Hilltop'\""); }
    record19.set("hostel_id", record19_hostel_idLookup.id);
    record19.set("room_type", "Private Double");
    record19.set("capacity", 2);
    record19.set("price", 1050);
    record19.set("total_rooms", 10);
    record19.set("available_rooms", 8);
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
    const record20_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Mussoorie Hilltop'");
    if (!record20_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Mussoorie Hilltop'\""); }
    record20.set("hostel_id", record20_hostel_idLookup.id);
    record20.set("room_type", "Private Single");
    record20.set("capacity", 1);
    record20.set("price", 700);
    record20.set("total_rooms", 10);
    record20.set("available_rooms", 8);
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
    const record21_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Retreat'");
    if (!record21_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Retreat'\""); }
    record21.set("hostel_id", record21_hostel_idLookup.id);
    record21.set("room_type", "Dorm");
    record21.set("capacity", 4);
    record21.set("price", 380);
    record21.set("total_rooms", 10);
    record21.set("available_rooms", 8);
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
    const record22_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Retreat'");
    if (!record22_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Retreat'\""); }
    record22.set("hostel_id", record22_hostel_idLookup.id);
    record22.set("room_type", "Private Double");
    record22.set("capacity", 2);
    record22.set("price", 950);
    record22.set("total_rooms", 10);
    record22.set("available_rooms", 8);
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
    const record23_hostel_idLookup = app.findFirstRecordByFilter("hostels", "name='Chopta Cloud Retreat'");
    if (!record23_hostel_idLookup) { throw new Error("Lookup failed for hostel_id: no record in 'hostels' matching \"name='Chopta Cloud Retreat'\""); }
    record23.set("hostel_id", record23_hostel_idLookup.id);
    record23.set("room_type", "Private Single");
    record23.set("capacity", 1);
    record23.set("price", 650);
    record23.set("total_rooms", 10);
    record23.set("available_rooms", 8);
  try {
    app.save(record23);
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