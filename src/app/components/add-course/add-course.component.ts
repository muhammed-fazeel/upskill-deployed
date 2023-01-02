import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  author:string="";

  course:Course=new Course(1,"",12,"",2,2,2,"","");

  constructor(private upSkillService:UpskillService,private router:Router) { }

  ngOnInit(): void {
    this.upSkillService.getUserByEmail().subscribe(res=>{
      this.author=res.userName
    })
    
  }

  addCourse(){
    this.course.author=this.author;
    this.upSkillService.addCourse(this.course).subscribe(res=>{location.reload();})


  }

}
