//server
Meteor.publish('student', function(){
    return Students.find();
});
Meteor.publish('teacher', function(){
    return Teachers.find();
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
	'insertTeacher':function(naam,qualification,date,month,year,address,phone,email){
			check(naam, String);
			check(qualification, String);
			check(date , String);
			check(address, String);
			check(phone , String);
			check(email, String);
			Teachers.insert({name: naam,
					 qualification: qualification,
					 dob: date,
					 address: address,
					 phone: phone,
					 emailId : email});
			console.log("data inserted of teacher");
			},
		
	'takeAttendance':function(present,absent){
			Attendance.insert({present:present, absent:absent});
			console.log(Attendance.find().fetch());
			}	
});
