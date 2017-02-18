//server file
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
Meteor.publish('timetable', function(){
	return TimeTable.find();
});
Meteor.publish('user', function(){
	return Users.find();
});
Meteor.publish('login', function(){
	return Login.find();
});

Meteor.methods({
	'insertStudent':function(naam,fname,mname,date,deptt,address,year,phone,email){
			check(naam, String);
			check(fname, String);
			check(mname, String);
			check(date , String);
			check(address, String);
			check(phone , String);
			check(email, String);
			Students.insert({      name: naam,
					 fathername: fname,
					 mothername: mname,
					 	dob: date,
					 department: deptt,
					       year: year,
					    address: address,
					      phone: phone,
					    emailId: email});
			console.log("data inserted of student");
			},

	'insertDepartment':function(deptt,hod){
			check(deptt, String);
			check(hod, String);
			Departments.insert({ name: deptt, 
					      hod: hod
					   });
			console.log("department inserted");
			},
		
	'checkTeacher':function(deptt){
			var found= Teachers.find({ department: deptt }).fetch();
			console.log("teacher found");
			return found;
			},

	'checkSubject':function(deptt,sem){
			var found= Subjects.find({ department:deptt,
						     semester:sem}).fetch();
			console.log("subject found");
			return found;
			},

	'insertSubject':function(deptt,subf,sem,subs,code){
			Subjects.insert({     department: deptt,
						fullname: subf,
					        semester: sem,
						    code: code,
					       shortname: subs});
			console.log("subjects inserted");
			},

	'retrieveTeacher':function(deptt){
			var found= Teachers.find({ department:deptt }).fetch();
			console.log("teacher's data found");
			return found;
			},
	'logIn':function(email,password){
			var found=Login.find({email:email,
				    password:pass});
                        if(found){
			var alert= Login.find({email:email}).fetch();
			return alert;	
			}
			else{
			var info= alert("Enter a valid email address and password");
			return info;}
			},
	'addTeacher':function(email,pass){
			Users.insert({
					 emailID: email,
					password: pass});
			console.log("teacher added in collection");
			},
	'insertTeacher':function(naam,qualification,date,address,code,phone,email,pass,deptt){
			Teachers.insert({         name: naam,
					 qualification: qualification,
					 	   dob: date,
					          code: code,
					       address: address,
					         phone: phone,
					      password: pass,
					       emailId: email,
					    department:deptt});
			console.log("data inserted of teacher");
			},
	'insertTimetable':function(deptt,teacher,
		monsub1,monsub2,monsub3,monsub4,monsub5,monsub6,monsub7,monsub8,
		monclass1,monclass2,monclass3,monclass4,monclass5,monclass6,monclass7,monclass8,
		tuesub1,tuesub2,tuesub3,tuesub4,tuesub5,tuesub6,tuesub7,tuesub8,
		tueclass1,tueclass2,tueclass3,tueclass4,tueclass5,tueclass6,tueclass7,tueclass8,
		wedsub1,wedsub2,wedsub3,wedsub4,wedsub5,wedsub6,wedsub7,wedsub8,
		wedclass1,wedclass2,wedclass3,wedclass4,wedclass5,wedclass6,wedclass7,wedclass8,
		thurssub1,thurssub2,thurssub3,thurssub4,thurssub5,thurssub6,thurssub7,thurssub8,
		thursclass1,thursclass2,thursclass3,thursclass4,thursclass5,thursclass6,thursclass7,thursclass8,
		frisub1,frisub2,frisub3,frisub4,frisub5,frisub6,frisub7,frisub8,
		friclass1,friclass2,friclass3,friclass4,friclass5,friclass6,friclass7,friclass8){
			console.log("data reached");
			TimeTable.insert({department:deptt,
					name:teacher,
					//mon sub
					monsub1:monsub1,
					monsub2:monsub2,
					monsub3:monsub3,
					monsub4:monsub4,
					monsub5:monsub5,
					monsub6:monsub6,
					monsub7:monsub7,
					monsub8:monsub8,
					//tue sub
					tuesub1:tuesub1,
					tuesub2:tuesub2,
					tuesub3:tuesub3,
					tuesub4:tuesub4,
					tuesub5:tuesub5,
					tuesub6:tuesub6,
					tuesub7:tuesub7,
					tuesub8:tuesub8,
					//wed sub
					wedsub1:wedsub1,
					wedsub2:wedsub2,
					wedsub3:wedsub3,
					wedsub4:wedsub4,
					wedsub5:wedsub5,
					wedsub6:wedsub6,
					wedsub7:wedsub7,
					wedsub8:wedsub8,
					//thurs sub
					thurssub1:thurssub1,
					thurssub2:thurssub2,
					thurssub3:thurssub3,
					thurssub4:thurssub4,
					thurssub5:thurssub5,
					thurssub6:thurssub6,
					thurssub7:thurssub7,
					thurssub8:thurssub8,	
					//fri sub
					frisub1:frisub1,
					frisub2:frisub2,
					frisub3:frisub3,
					frisub4:frisub4,
					frisub5:frisub5,
					frisub6:frisub6,
					frisub7:frisub7,
					frisub8:frisub8,
					//mon class
					monclass1:monclass1,
					monclass2:monclass2,
					monclass3:monclass3,
					monclass4:monclass4,
					monclass5:monclass5,
					monclass6:monclass6,
					monclass7:monclass7,
					monclass8:monclass8,
					//tue class
					tueclass1:tueclass1,
					tueclass2:tueclass2,
					tueclass3:tueclass3,
					tueclass4:tueclass4,
					tueclass5:tueclass5,
					tueclass6:tueclass6,
					tueclass7:tueclass7,
					tueclass8:tueclass8,
					//wed sub
					wedclass1:wedclass1,
					wedclass2:wedclass2,
					wedclass3:wedclass3,
					wedclass4:wedclass4,
					wedclass5:wedclass5,
					wedclass6:wedclass6,
					wedclass7:wedclass7,
					wedclass8:wedclass8,
					//thurs sub
					thursclass1:thursclass1,
					thursclass2:thursclass2,
					thursclass3:thursclass3,
					thursclass4:thursclass4,
					thursclass5:thursclass5,
					thursclass6:thursclass6,
					thursclass7:thursclass7,
					thursclass8:thursclass8,	
					//fri class
					friclass1:friclass1,
					friclass2:friclass2,
					friclass3:friclass3,
					friclass4:friclass4,
					friclass5:friclass5,
					friclass6:friclass6,
					friclass7:friclass7,
					friclass8:friclass8
					}),
			console.log("hogya g submit");
			},	

	'takeAttendance':function(present,absent){
			Attendance.insert({ present:present, 
					     absent:absent });
			console.log(Attendance.find().fetch());
			}
});


















































