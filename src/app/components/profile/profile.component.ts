import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Category } from 'src/app/models/Category';
import { Course } from 'src/app/models/Course';
import { User } from 'src/app/models/User';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

x:Category[]=[
  new Category(1,"sdsd","img1"),
  new Category(2,"sdsd","img1"),
  new Category(3,"sdsd","img1")
  
];
enrolledCourses:Course[]=[];

user:User=new User(1,1,"default","default","default","blah");
userId=0;


  categoriesLst?:Category[];
  constructor(private upskillService:UpskillService) { }

  ngOnInit(): void {




    console.log(this.x);

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
    this.upskillService.getEnrolledCoursesById(this.user.userId).subscribe(data=>this.enrolledCourses=data);
      }
    })
  }

  

  // mappingToCategory(data:any[]):Category[]{
  //   const output = data.reduce(
  //     (acc:Category[], entry) => acc.concat(new Category(entry.categoryId,entry.categoryName,entry.imageUrl)),
  //     []
  //   );
  //   return output;
  // }

}
