//server
Meteor.publish('student', function(){
    return Students.find();
});
Meteor.publish('teacher', function(){
    return Teachers.find();
});
Meteor.publish('deaprtment', function(){
    return Departments.find();
});
Meteor.publish('attendance', function(){
    return Attendance.find();
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
			check(deptt, String);
			var found= Teachers.find({department:deptt}).fetch();
			return found;
			console.log("teacher found");
			},
	'insertTeacher':function(naam,qualification,date,month,year,address,phone,email,deptt){
			check(naam, String);
			check(qualification, String);
			check(date , String);
			check(address, String);
			check(phone , String);
			check(email, String);
			check(deptt, String);
			Teachers.insert({name: naam,
					 qualification: qualification,
					 dob: date,
					 address: address,
					 phone: phone,
					 emailId : email,
					 deptartment:deptt});
			console.log("data inserted of teacher");
			},
		
	'takeAttendance':function(present,absent){
			Attendance.insert({present:present, absent:absent});
			console.log(Attendance.find().fetch());
			}	
});
