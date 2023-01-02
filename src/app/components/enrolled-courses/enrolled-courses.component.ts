import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {

  constructor(private upskillService:UpskillService,private router:Router) { }

  user:User=new User(1,1,"default","default","default","blah");
userId=0;

  courses:Course[]=[]

  ngOnInit(): void {





    // this.upskillService.getAllCategories()
    // .subscribe(data=>{
    //     this.categoriesLst=data;
    //     console.log(data);
    //     console.log(this.categoriesLst);
    // })  

    this.upskillService.getUserByEmail().subscribe(data=>{
      this.user.email=data.email;
      this.user.pictureUrl=data.pictureUrl;
      this.user.roleId=data.roleId;
      this.user.userId=data.userId;
      this.user.userName=data.userName

      if(this.user.userId!=null){
    this.upskillService.getEnrolledCoursesById(this.user.userId).subscribe(data=>this.courses=data);
      }
    })
  }




}
