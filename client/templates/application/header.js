
Template.header.helpers({
  currentUserName: function() {
    return Meteor.user().profile.name;
  },
  signedIn: function() {
    return Session.get("signedIn");
  },
  loading: function() {
    return Session.get("isLoading");
  },
  debugMode: function() {
    if (Session.get("isDebugging")) {
      return "(DEBUG MODE)"
    }
  },
  patientTaskEntry: function() {

    var currentSettings = PatientSettings.findOne({userId: Meteor.userId()});

    return currentSettings.tasks
  }
});

Template.header.events({
  "click .btnLogout": function(e,t){
    Session.set("signedIn", false);
    Meteor.logout();
    Router.go("login");
  },
  "click .btnRefresh": function(e, t) {
    Session.set("isLoading", true);
    Session.set("resetAppointments", true);
  }
});
