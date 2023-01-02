import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/Category';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-all-categories',
  templateUrl: './all-categories.component.html',
  styleUrls: ['./all-categories.component.css']
})
export class AllCategoriesComponent implements OnInit {

  categoriesLst:Category[]=[];
  coursesLst:Course[]=[];
  catId=1;

  constructor(private upskillService:UpskillService,private router:Router) { }

  ngOnInit(): void {
        this.upskillService.getAllCategories()
    .subscribe(data=>{
        this.categoriesLst=data;
        console.log(data);
        console.log(this.categoriesLst);
    })  
  }
  showCourses(cid:number){
    //fetch all the courses by catid using service
    this.upskillService.getCoursesByCat(cid)
    .subscribe(data=>{
      this.coursesLst=data;
      console.log('x:',this.coursesLst);
    
      this.router.navigate(['/courses',cid]);
    
    })
  }
} 