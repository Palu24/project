//server
Meteor.publish('student', function(){
    return Students.find();
});
Meteor.publish('teacher', function(){
    return Teachers.find();
});
Meteor.publish('department', function(){
    return Departments.find();
});
Meteor.publish('attendance', function(){
    return Attendance.find();
});
Meteor.publish('subject', function(){
    return Subjects.find();
});


Meteor.methods({
	'insertStudent':function(naam,fname,mname,date,address,phone,email){
			check(naam, String);
			check(fname, String);
			check(mname, String);
			check(date , String);
			check(address, String);
			check(phone , String);
			check(email, String);
			Students.insert({ name: naam,
					 fathername: fname,
					 mothername: mname,
					 dob: date,
					 address: address,
					 phone: phone,
					 emailId : email});
			console.log("data inserted of student");
			},
		'insertDepartment':function(deptt,hod){
			check(deptt, String);
			check(hod, String);
			Departments.insert({ name: deptt, hod: hod
					});
			console.log("department inserted");
			},
		'checkTeacher':function(deptt){
			var found= Teachers.find({department:deptt}).fetch();
			console.log("teacher found");
			return found;
			},
		'checkSubject':function(deptt,sem){
			var found= Subjects.find({department:deptt,semester:sem}).fetch();
			console.log("subject found");
			return found;
			
			},
		'insertSubject':function(deptt,sub,sem){
			Subjects.insert({department:deptt,subjects:sub,semester:sem});
			console.log("subjects inserted");
			},
	'insertTeacher':function(naam,qualification,date,address,phone,email,deptt){
			Teachers.insert({name: naam,
					 qualification: qualification,
					 dob: date,
					 address: address,
					 phone: phone,
					 emailId : email,
					 department:deptt});
			console.log("data inserted of teacher");
			},
		
	'takeAttendance':function(present,absent){
			Attendance.insert({present:present, absent:absent});
			console.log(Attendance.find().fetch());
			}	
});


















































