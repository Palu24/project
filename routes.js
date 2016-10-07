FlowRouter.route('/student', {
  action: function() {
   BlazeLayout.render("student");
  }
});

FlowRouter.route('/teacher', {
  action: function() {
    BlazeLayout.render("teacher");
  }
});
FlowRouter.route('/attendance', {
  action: function() {
    BlazeLayout.render("retrieveInformation");
  }
});
FlowRouter.route('/department', {
  action: function() {
    BlazeLayout.render("departmentInformation");
  }
});
FlowRouter.route('/allocateteacher', {
  action: function() {
    BlazeLayout.render("allocateTeacher");
  }
});
FlowRouter.route('/allocatesubject', {
  action: function() {
    BlazeLayout.render("allocateSubject");
  }
});
FlowRouter.route('/timetable', {
  action: function() {
    BlazeLayout.render("timeTable");
  }
});
FlowRouter.route('/insertsubject', {
  action: function() {
    BlazeLayout.render("insertSubject");
  }
});
