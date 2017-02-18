//client file
Meteor.subscribe('student');
Meteor.subscribe('teacher');
Meteor.subscribe('department');
Meteor.subscribe('attendance');
Meteor.subscribe('subject');
Meteor.subscribe('timetable');
Meteor.subscribe('user');
Meteor.subscribe('login');

Template.login.events({
   'submit login':function(event){
			var email= $('[name="email"]').val();
			var password= $('[name="pass"]').val();
			Meteor.call('logIn',email,password,function(err,alert){
						    if(err){
							 console.log(err);
							   } 
						     else{ 
							  Session.set('msg',alert); 
							 }
					         });
			event.target.email.value     =" ";
		        event.target.pass.value  =" ";





                                 }   
});

Template.student.events({
    'submit .btn1': function(event){
         	event.preventDefault();
		var naam    = event.target.nm.value;
		var fname   = event.target.fname.value;
		var mname   = event.target.mname.value;
		var date    = event.target.date.value;
		var deptt   = event.target.dept.value;
		var address = event.target.add.value;
		var year    = event.target.year.value;
		var phone   = event.target.phn.value;
		var email   = event.target.email.value;
		Meteor.call('insertStudent',naam,fname,mname,date,deptt,address,year,phone,email);
		event.target.nm.value     =" ";
		event.target.fname.value  =" ";
		event.target.mname.value  =" ";
		event.target.date.value   =" ";
		event.target.add.value    =" ";
		event.target.phn.value    =" ";
		event.target.email.value  =" ";
    }
});
Template.insertSubject.events({
    'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var subf  = event.target.subjectfull.value;
		var subs  = event.target.subjectshort.value;
		var code  = event.target.code.value;
		var sem   = event.target.sem.value;
		Meteor.call('insertSubject',deptt,subf,sem,subs,code);
		event.target.subjectfull.value   ="";
		event.target.subjectshort.value  =" ";
		event.target.code.value          =" ";
    }
});

Template.allocateSubject.events({
    'submit .sub': function(event){
         	event.preventDefault();
		var deptt = event.target.dept.value;
		var sem   = event.target.sem.value;
		Meteor.call('checkTeacher',deptt,function(err,data){
						    if(err){
							console.log(err);
							    } 
						    else    { 
						        Session.set('checkt',data); 
							    }
						 });
		Meteor.call('checkSubject',deptt,sem,function(err,data){
						    if(err){
							 console.log(err);
							   } 
						     else{ 
							  Session.set('checks',data); 
							 }
					         });
			        
    },
    'click .su': function(event){
         	event.preventDefault();
		//var deptt   = Session.get("checkt");
		//var sem     = Session.get("checks");
		var subject = event.target.subject;
		var teacher = event.target.teacher;
		//console.log(deptt);
		//console.log(sem);
		
			var assigned=[];
			var notassigned=[];
			for( s in subject) {
		     		var v = subject[s].checked;
		     		if(v)
				    {
					assigned.push(subject[s].value);
               		 	    }
		    		else{
					notassigned.push(subject[s].value);
				    }
					   }
			//Meteor.call('takeAttendance',present,absent);
			console.log(assigned);
			console.log(notassigned);
			console.log(teacher[t].value); 
 					
		 
		
	}
    
});

Template.timeTable.events({
    'click .get': function(event){
         	event.preventDefault();
		var deptt = $('.deptt').val();
		Session.set('department',deptt);
		Meteor.call('retrieveTeacher',deptt,function(err,data){
							if(err){
							   console.log(err);
								} 
							else    { 
							    Session.set('teacherdata',data); 
							        }
					 });
			        
      },

	'submit .teacher':function(event){
		event.preventDefault();
		var deptt      = Session.get('department');
		var teacher    = event.target.teacher.value;
		//1 sub
		var monsub1    = event.target.monsub1.value;
		var tuesub1    = event.target.tuesub1.value;
		var wedsub1    = event.target.wedsub1.value;
		var thurssub1  = event.target.thurssub1.value;
		var frisub1    = event.target.frisub1.value;
		//2 sub
		var monsub2    = event.target.monsub2.value;
		var tuesub2    = event.target.tuesub2.value;
		var wedsub2    = event.target.wedsub2.value;
		var thurssub2  = event.target.thurssub2.value;
		var frisub2    = event.target.frisub2.value;
		//3 sub
		var monsub3    = event.target.monsub3.value;
		var tuesub3    = event.target.tuesub3.value;
		var wedsub3    = event.target.wedsub3.value;
		var thurssub3  = event.target.thurssub3.value;
		var frisub3    = event.target.frisub3.value;
		//4 sub
		var monsub4    = event.target.monsub4.value;
		var tuesub4    = event.target.tuesub4.value;
		var wedsub4    = event.target.wedsub4.value;
		var thurssub4  = event.target.thurssub4.value;
		var frisub4    = event.target.frisub4.value;
		//5 sub
		var monsub5    = event.target.monsub5.value;
		var tuesub5    = event.target.tuesub5.value;
		var wedsub5    = event.target.wedsub5.value;
		var thurssub5  = event.target.thurssub5.value;
		var frisub5    = event.target.frisub5.value;
		//6 sub
		var monsub6    = event.target.monsub6.value;
		var tuesub6    = event.target.tuesub6.value;
		var wedsub6    = event.target.wedsub6.value;
		var thurssub6  = event.target.thurssub6.value;
		var frisub6    = event.target.frisub6.value;
		//7 sub
		var monsub7    = event.target.monsub7.value;
		var tuesub7    = event.target.tuesub7.value;
		var wedsub7    = event.target.wedsub7.value;
		var thurssub7  = event.target.thurssub7.value;
		var frisub7    = event.target.frisub7.value;
		//8 sub
		var monsub8    = event.target.monsub8.value;
		var tuesub8    = event.target.tuesub8.value;
		var wedsub8    = event.target.wedsub8.value;
		var thurssub8  = event.target.thurssub8.value;
		var frisub8    = event.target.frisub8.value;
		//classname start
		//1 class
		var monclass1   = event.target.monclass1.value;
		var tueclass1   = event.target.tueclass1.value;
		var wedclass1   = event.target.wedclass1.value;
		var thursclass1 = event.target.thursclass1.value;
		var friclass1   = event.target.friclass1.value;
		//2 class
		var monclass2   = event.target.monclass2.value;
		var tueclass2   = event.target.tueclass2.value;
		var wedclass2   = event.target.wedclass2.value;
		var thursclass2 = event.target.thursclass2.value;
		var friclass2   = event.target.friclass2.value;
		//3 class
		var monclass3   = event.target.monclass3.value;
		var tueclass3   = event.target.tueclass3.value;
		var wedclass3   = event.target.wedclass3.value;
		var thursclass3 = event.target.thursclass3.value;
		var friclass3   = event.target.friclass3.value;
		//4 class
		var monclass4   = event.target.monclass4.value;
		var tueclass4   = event.target.tueclass4.value;
		var wedclass4   = event.target.wedclass4.value;
		var thursclass4 = event.target.thursclass4.value;
		var friclass4   = event.target.friclass4.value;
		//5 class
		var monclass5   = event.target.monclass5.value;
		var tueclass5   = event.target.tueclass5.value;
		var wedclass5   = event.target.wedclass5.value;
		var thursclass5 = event.target.thursclass5.value;
		var friclass5   = event.target.friclass5.value;
		//6 class
		var monclass6   = event.target.monclass6.value;
		var tueclass6   = event.target.tueclass6.value;
		var wedclass6   = event.target.wedclass6.value;
		var thursclass6 = event.target.thursclass6.value;
		var friclass6   = event.target.friclass6.value;
		//7 class
		var monclass7   = event.target.monclass7.value;
		var tueclass7   = event.target.tueclass7.value;
		var wedclass7   = event.target.wedclass7.value;
		var thursclass7 = event.target.thursclass7.value;
		var friclass7   = event.target.friclass7.value;
		//8 class
		var monclass8   = event.target.monclass8.value;
		var tueclass8   = event.target.tueclass8.value;
		var wedclass8   = event.target.wedclass8.value;
		var thursclass8 = event.target.thursclass8.value;
		var friclass8   = event.target.friclass8.value;
		Meteor.call('insertTimetable',deptt,teacher,monsub1,monsub2,monsub3,monsub4,monsub5,monsub6,monsub7,monsub8,
			monclass1,monclass2,monclass3,monclass4,monclass5,monclass6,monclass7,monclass8,
			tuesub1,tuesub2,tuesub3,tuesub4,tuesub5,tuesub6,tuesub7,tuesub8,
			tueclass1,tueclass2,tueclass3,tueclass4,tueclass5,tueclass6,tueclass7,tueclass8,
			wedsub1,wedsub2,wedsub3,wedsub4,wedsub5,wedsub6,wedsub7,wedsub8,
			wedclass1,wedclass2,wedclass3,wedclass4,wedclass5,wedclass6,wedclass7,wedclass8,
			thurssub1,thurssub2,thurssub3,thurssub4,thurssub5,thurssub6,thurssub7,thurssub8,
			thursclass1,thursclass2,thursclass3,thursclass4,thursclass5,thursclass6,thursclass7,thursclass8,
			frisub1,frisub2,frisub3,frisub4,frisub5,frisub6,frisub7,frisub8,
			friclass1,friclass2,friclass3,friclass4,friclass5,friclass6,friclass7,friclass8);		
}});

Template.teacher.events({
    'submit .btn2': function(event){
		event.preventDefault();
		var naam          = event.target.nm.value;
		var qualification = event.target.qualification.value;
		var date          = event.target.date.value;
		var address       = event.target.add.value;
		var code          = event.target.code.value;
		var phone         = event.target.phn.value;
		var email         = event.target.email.value;
		var pass          = event.target.pass.value;
		var deptt         = event.target.dept.value;
		Meteor.call('insertTeacher',naam,qualification,date,address,code,phone,email,pass,deptt);
		Meteor.call('addTeacher',email,pass);
		event.target.nm.value    = " ";
		event.target.date.value  = " ";
		event.target.add.value   = " ";
		event.target.phn.value   = " ";
		event.target.email.value = " ";
		event.target.pass.value  = " ";
		event.target.code.value  = " ";
		event.target.dept.value  = "Departments";
    }
});
Template.departmentInformation.events({
    'submit .deptt': function(event){
		event.preventDefault();
		var deptt = event.target.deptt.value;
		var hod   = event.target.hod.value;
		Meteor.call('insertDepartment',deptt,hod);
		event.target.deptt.value =" ";
		event.target.hod.value   =" ";
    }
});
		
Template.retrieveInformation.events({
	'submit .toggle':function(event){
			event.preventDefault();
			var targets = event.target.toggle;
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

//helpers
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

Template.retrieveInformation.helpers({
    'department':function(){
	 return Departments.find().fetch();
     }
});

Template.login.helpers({
    'login':function(){
	 var alert= Session.get("msg");
	return alert;
     }
});

Template.student.helpers({
    'department':function(){
       	return Departments.find().fetch();
     }
});

Template.timeTable.helpers({
    'teacher': function(){
        return Teachers.find().fetch();
    }
});	

Template.insertSubject.helpers({
    'department': function(){
        return Departments.find().fetch();
    }
});
	
Template.timeTable.helpers({
    'department': function(){
        return Departments.find().fetch();
    },
    'teacher':function(){
	 var found= Session.get("teacherdata");
	 return found;
    }
});
	
Template.allocateSubject.helpers({
    'department': function(){
        return Departments.find().fetch();
    },
    'teacher':function(){
	 var foundt= Session.get("checkt");
	 return foundt;
    },
    'subject':function(){
	 var founds= Session.get("checks");
	 return founds;
    }
});	
		










