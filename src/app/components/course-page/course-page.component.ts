import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { Review } from 'src/app/models/Review';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-page',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  date=new Date();
  author:string="";
  review= new Review(1,"",this.date,1,"");
  courseId:number=5;
  textclass='text';
  course=new Course(1,"",1,"",1,1,1,"","");
  coursetitle:string="";
  videolinks:VideoLinks[]=[];
  reviews:Review[]=[];
  roleId:boolean=false;
  course_flag=0;
  temp_test?=0;
  present_video:SafeResourceUrl="https://www.youtube.com/watch?v=nOY0TWWvynU";
  rating_arr:number[]=[]
  constructor(private upskillservice:UpskillService,public sanitizer:DomSanitizer,private activatedRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    if(localStorage.getItem("roleId") as unknown as string=="2"){
      this.roleId=true;
  };

      this.activatedRoute.params.subscribe(params => {
        // console.log(params);
        this.courseId = params["id"];
      });
    this.upskillservice.GetVideoLinksByCourseId(this.courseId).subscribe(data=>{
      this.videolinks=data;
      // console.log(this.videolinks);
    });
    this.upskillservice.getReviews(this.courseId).subscribe(data=>{
      this.reviews=data;
    });
    this.upskillservice.getCourseById(this.courseId).subscribe(data=>{
      this.course=data;
    });

    this.upskillservice.getUserByEmail().subscribe(data=>{
      this.author=data.userName;
      console.log(this.author);
      this.upskillservice.getEnrolledCoursesById(data.userId as unknown as number).subscribe(res=>{
        for (const course of res) {
          if(course.courseId==this.course.courseId){
            this.course_flag=1;
            this.temp_test=course.courseId;

            break;
          }
          
        }

        if(this.course_flag==0){

          if(localStorage.getItem("roleId")!="2"){
          console.log(this.temp_test,this.course.courseId,this.course_flag);
          alert("You are not enrolled");
          this.router.navigate(['/']);
        }

        }
  })

    })


  }
  showVideo(v:VideoLinks){
    this.present_video=this.sanitizer.bypassSecurityTrustResourceUrl(v.url);
    // console.log(this.present_video);
    this.textclass='textnew';
    this.coursetitle=v.title;
  }
  addReview( ){
    this.review.date=this.date;
    this.review.author=this.author;
    this.review.courseId=this.courseId;
    this.upskillservice.addReview(this.review).subscribe(res=>{this.router.navigate(["/course-page"]);location.reload()})
  }

  deleteVideo(videoLinkId:number|undefined){

    if(prompt("the video will be deleted, types 'yes' for confirmation")){
          this.upskillservice.deleteVideo(videoLinkId as unknown as number).subscribe(res=>{console.log(res);location.reload()});
    }
  }

  make_stars(review:Review){
    for (let index = 0; index < review.rating; index++) {
      this.rating_arr.push(index);
      console.log(this.course.rating);
    }
  }

  empty_stars(){
    this.rating_arr=[];
  }

}
