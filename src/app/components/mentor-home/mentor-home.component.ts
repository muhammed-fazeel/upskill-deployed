import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-mentor-home',
  templateUrl: './mentor-home.component.html',
  styleUrls: ['./mentor-home.component.css']
})
export class MentorHomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  addcourse(){
    this.router.navigate(['/add-course'])
  }

}
