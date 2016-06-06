Meteor.publish('patientSettings', function() {
    return PatientSettings.find();
});

Meteor.publish("userDirectory", function () {
  return Meteor.users.find({}, {fields: {_id: 1, username: 1, emails: 1, profile: 1, roles: 1}});
});
/*
Meteor.publish('patientAppointments', function() {
    return PatientAppointments.find();
});

Meteor.publish('patientAppointmentDetails', function() {
    return PatientAppointmentDetails.find();
});
*/
Meteor.publish('locationLinks', function() {
    return LocationLinks.find();
})

// This is the reference data for tasks that are required - e.g. Blood Glucose monitoring, or BP monitoring or Weight
Meteor.publish('tasks', function() {
    return Tasks.find();
});

Meteor.publish('patientMessages', function() {
    return PatientMessages.find();
});

Meteor.publish('patientObservations', function() {
    return PatientObservations.find();
});
