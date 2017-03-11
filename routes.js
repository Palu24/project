FlowRouter.route('/student', {
	action: function() {
		BlazeLayout.render("student");
			   }
});
FlowRouter.route('/', {
	action: function() {
		BlazeLayout.render("login");
			   }
});

FlowRouter.route('/addteacher', {
	action: function() {
		BlazeLayout.render("teacher");
  			   }
});

FlowRouter.route('/attendance', {
	action: function() {
		BlazeLayout.render("riAttendance");
			   }
});
FlowRouter.route('/information', {
	action: function() {
		BlazeLayout.render("riInformation");
			   }
});
FlowRouter.route('/rollno', {
	action: function() {
		BlazeLayout.render("rollno");
			   }
});
FlowRouter.route('/viewtimetable', {
	action: function() {
		BlazeLayout.render("riTimetable");
			   }
});
FlowRouter.route('/edittimetable', {
	action: function() {
		BlazeLayout.render("editTable");
			   }
});
FlowRouter.route('/teacher', {
	action: function() {
		BlazeLayout.render("retrieveInformation");
			   }
});

FlowRouter.route('/department', {
	action: function() {
		BlazeLayout.render("departmentInformation");
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
