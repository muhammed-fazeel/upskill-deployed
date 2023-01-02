import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  all_courses:Course[]=[];
  user_courses:Course[]=[];
  user:User=new User(1,1,"default","default","default","blah");
  roleId?:boolean=false;
  videoLinks:VideoLinks[]=[];


  //fetch this name from the database
  user_name="Albert";

  constructor(private router:Router, private upSkillService:UpskillService) { }

  ngOnInit(): void {




    this.upSkillService.getUserByEmail().subscribe(data=>{
      this.user.email=data.email;
      this.user.pictureUrl=data.pictureUrl;
      this.user.roleId=data.roleId;
      this.user.userId=data.userId;
      this.user.userName=data.userName


    });
    this.upSkillService.getAllCourses().subscribe(data=>{

      this.all_courses=data;
      for (const course of this.all_courses) {
        console.log(course.author);

        if(course.author==this.user.userName){
          console.log("im here")
          this.user_courses.push(course)
        }
            
      }});


    



  }

  delete(courseId:number|undefined){
    console.log("dleete called");
    if(prompt("Are you sure you want to delete this course? Type 'yes' to confirm")){
    this.upSkillService.deleteCourse(courseId as unknown as number).subscribe(res=>{location.reload();});
  }
  }


  }





