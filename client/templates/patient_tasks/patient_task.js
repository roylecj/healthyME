
Template.patientTask.helpers({
  patientTaskHeading: function() {
    // Find the heading for this task

    thisTask = Tasks.findOne({_id: this.taskId});

    return thisTask.taskHeading
  }
});
