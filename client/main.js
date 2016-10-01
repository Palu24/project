//client
Meteor.subscribe('student');
Meteor.subscribe('teacher');
Meteor.subscribe('department');
Meteor.subscribe('attendance');


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
Template.allocateTeacher.events({
    'submit .teacher': function(event){
         	event.preventDefault();
		var deptt= event.target.dept.value;
		Meteor.call('checkTeacher',deptt,function(err,data){
										if(err){
										   console.log(err);
											} 
									    	else{ 
										    Session.set('teacher',data); 
											}
											    }				
					    );
			        }

    
});
Template.teacher.events({
    'submit .btn2': function(event){
		event.preventDefault();
		var naam= event.target.nm.value;
		var qualification= event.target.qualification.value;
		var date= event.target.date.value;
		var address= event.target.add.value;
		var phone= event.target.phn.value;
		var email= event.target.email.value;
		var deptt= event.target.dept.value;
		Meteor.call('insertTeacher',naam,qualification,date,address,phone,email,deptt);
    }
});
Template.departmentInformation.events({
    'submit .deptt': function(event){
		event.preventDefault();
		var deptt= event.target.deptt.value;
		var hod= event.target.hod.value;
		Meteor.call('insertDepartment',deptt,hod);
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
    },
	'department':function(){
		return Departments.find().fetch();
				}
});
Template.retrieveInformation.helpers({
	 'databaseCall': function(){
       return Students.find().fetch();
    }
});	
Template.allocateTeacher.helpers({
	 'teacher': function(){
       return Teachers.find().fetch();
    },
	'check':function(){
	 var  found = session.get('teacher');
	return found;}
});
	
