Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() {
    return [
      Meteor.subscribe('patientSettings'),
      Meteor.subscribe("userDirectory"),
      Meteor.subscribe("patientMessages"),
      Meteor.subscribe("locationLinks"),
      Meteor.subscribe("tasks"),
      Meteor.subscribe("patientObservations")
    ];
  }
});

Router.route('/', {name: 'login'});
Router.route('/appointmentList', {name: 'appointmentList'});
Router.route('/appointment/:_id', {name: 'appointmentItem'});
Router.route('/summary', {name: 'patientSummary'});
Router.route('/taskEntry/:_id', {
  name: 'observationEntry',
  data: function() {
    return Tasks.findOne({_id: this.params._id});
  }
});

var requireLogin = function() {
  if (! Meteor.user()) {
    if (Meteor.loggingIn()) {
      this.render(this.loadingTemplate);
    } else {
    this.render('accessDenied');
  }
  }
  else {
    this.next();
  }
};

// Make sure that you are logged in before we start doing this...
Router.onBeforeAction(requireLogin, {except: ['login']});
