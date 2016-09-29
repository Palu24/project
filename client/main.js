//client
Meteor.subscribe('student');
Meteor.subscribe('teacher');


Template.student.events({
    'submit .btn1': function(event){
         	event.preventDefault();
		
		var naam= event.target.nm.value;
		var fname= event.target.fname.value;
		var mname= event.target.mname.value;
		var date= event.target.date.value;
		var address= event.target.add.value;
		var phone= event.target.phn.value;
		var email= event.target.email.value;
		Meteor.call('insertStudent',naam,fname,mname,date,address,phone,email);
    }
});
Template.teacher.events({
    'submit .btn2': function(event){
		event.preventDefault();
		var userId = Meteor.userId();
		Session.set('user',userId);
		var naam= event.target.nm.value;
		var qualification= event.target.qualification.value;
		var date= event.target.date.value;
		var address= event.target.add.value;
		var phone= event.target.phn.value;
		var email= event.target.email.value;
		Meteor.call('insertTeacher',naam,qualification,date,address,phone,email);
    }
});
Template.retrieveInformation.events({
	'submit .toggle':function(event){
			event.preventDefault();
			var targets= event.target.toggle;
			var present=[];
			var absent=[];
			for( i in targets) {
		     		var v =targets[i].checked;
		     		if(v)
				    {
					 present.push(targets[i].value);
               		 	    }
		    		else{
					absent.push(targets[i].value);
				    }
					   }
			Meteor.call('takeAttendance',present,absent);
 					}  
});


Template.teacher.helpers({
    'date': function(){
       var d = new Date();
	var dor= d.getDate();
	return dor; 
    },
    'month': function(){
       var d = new Date();
	var mor= d.getMonth() + 1;
	return mor; 
    },
    'year': function(){
       var d = new Date();
	var yor= d.getFullYear();
	return yor; 
    }
});
Template.retrieveInformation.helpers({
	 'databaseCall': function(){
       return Students.find().fetch();
    }
});


