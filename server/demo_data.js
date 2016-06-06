
 if (Meteor.users.find().count() === 0) {

   // This is the base environment when we first start out...
   // we need a login that we can use, and some roles, and that's about it
   // From there, the user can login, and setup the users that they need, and the mapping tables
   // and any tasks that they want to assign.

    var thisid;
    var userId = Accounts.createUser({
      username: 'croyle',
      password: 'password',
      email: 'croyle3@csc.com',
      profile: { name: 'Chris Royle'}
    });

    var taskId = Tasks.insert({
      taskHeading: "Blood Glucose",
      taskName: "Blood Glucose",
      taskDescription: "What is your Glucose level today",
      taskUOM: "ml/kL"
    });

    var taskWeightId = Tasks.insert({
      taskHeading: "Height / Weight",
      taskName: "Weight",
      taskDescription: "What is your weight in kg",
      taskUOM: "kg"
    });

    PatientSettings.insert({
      userId: userId,
      secret: "UrbygQkNeMrmNa5pGkyNLQFqMecdyWjcK2TtzhW2W5un7bNjNcCBbjqFhMaKBWJEzVVFXqmQatjx9hQeyTuqvVS4cejEVz7fUSY4P2du6sk8Q8inLhFdDC5keGkzGwdP",
      deviceId: "669caeb1-f67d-45b2-8ab1-2ca833ab054b",
      tasks: [{
        taskId: taskId,
        lastPerformed: new Date()
      }, {
        taskId: taskWeightId,
        lastPerformed: new Date()
      }]
    });

    LocationLinks.insert({
      name: "GREE",
      lat: "-27.5130292",
      long: "153.0442283"
    });

    LocationLinks.insert({
      name: "WES",
      lat: "-27.4781422",
      long: "152.9957604"
    });
}
