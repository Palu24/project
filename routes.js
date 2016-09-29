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
