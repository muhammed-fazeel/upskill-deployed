import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { ConnectableObservable } from 'rxjs';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { UpskillService } from 'src/app/services/upskill.service';
@Component({
  selector: 'app-uploaded-courses',
  templateUrl: './uploaded-courses.component.html',
  styleUrls: ['./uploaded-courses.component.css']
})
export class UploadedCoursesComponent implements OnInit {

  // all lord forgive for this is not the correct way to do this 
  //but i'm just another lazy guy who doesn't 
  // wanna do to much work
  all_courses:Course[]=[];
  user_courses:Course[]=[];
  user:User=new User(1,1,"default","default","default","blah");
  roleId?:boolean=false;


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


}
