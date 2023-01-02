import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http'
import { Category } from '../models/Category';
import { Observable } from 'rxjs/internal/Observable';
import { Course } from '../models/Course';
import { map, ObservedValuesFromArray } from 'rxjs';
import { User } from '../models/User';
import { VideoLinks } from '../models/VideoLinks';
import { Review } from '../models/Review';
import { EnrolledCourses } from '../models/EnrolledCourse';

@Injectable({
  providedIn: 'root'
})
export class UpskillService {

  baseUrl:string="https://localhost:7285/api/UpSkill/";
  constructor(private http:HttpClient,private router:Router) { }

  //calls for categories
  getAllCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl+"GetAllCategories");
  }

  //calls for courses

  getAllCourses():Observable<Course[]>{
    // console.log("request fired!");
    return this.http.get<Course[]>(this.baseUrl+"GetAllCourses");
  }

  getUserByEmail():Observable<User>{
    //edit here please :)
    var email=localStorage.getItem("email");
    return this.http.get<User>(this.baseUrl+"GetUserByEmail?email="+email);
  }

  addVideoToCourse(video:VideoLinks):Observable<VideoLinks>{
        return this.http.post<VideoLinks>(this.baseUrl+"AddVideo",video)
  }

  addUser(user:User):Observable<User>{
    return this.http.post<User>(this.baseUrl+"AddUser",user)
  }
  getCourseById(courseId:number):Observable<Course>{
    //edit here please :)
    // var courseId=localStorage.getItem("courseId");
    return this.http.get<Course>(this.baseUrl+"GetCourse/"+courseId);
  }
  //calls for videolinks
  GetVideoLinksByCourseId(courseId:number):Observable<VideoLinks[]>{
    return this.http.get<VideoLinks[]>(this.baseUrl+"GetVideos/"+courseId);
  }

  getCoursesByCat(catId:number):Observable<Course[]>{
    var courses=this.http.get<Course[]>(this.baseUrl+"GetCoursesByCategoryId/"+catId);
    return courses;
  }

  addCourse(course:Course):Observable<Course>{
    return this.http.post<Course>(this.baseUrl+"AddCourse",course)
  }

  getReviews(courseId:number):Observable<Review[]>{
    return this.http.get<Review[]>(this.baseUrl+"GetReviews/"+courseId)
  }
  addReview(review:Review):Observable<Review>{
    return this.http.post<Review>(this.baseUrl+"AddReview",review)
  }


  getEnrolledCoursesById(userId:number):Observable<Course[]>{
    var courses=this.http.get<Course[]>(this.baseUrl+"GetEnrolledCourses?userid="+userId);
    return courses;
  }

  addEnrolledCourse(enrolledCourse:EnrolledCourses):Observable<EnrolledCourses>{
    return this.http.post<EnrolledCourses>(this.baseUrl+"AddEnrolledCourse",enrolledCourse)
  }

  deleteCourse(courseId:number):Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl+"delete-course/"+courseId)
  }

  deleteVideo(videoLinkId:number):Observable<boolean>{
    return this.http.delete<boolean>(this.baseUrl+"DeleteVideo/"+videoLinkId);
  }

  //calls for enrolledCourses

  //calls for Reviews

  //calls for Role

  //calls for User
  getUser():Observable<User>{
    return this.http.get<User>(this.baseUrl+"")
  }

  getCourse():Observable<Course>{
    return this.http.get<Course>(this.baseUrl+"GetCourse/")
    .pipe(map((res:any)=>{
      return res;
    }));
  }
  
}
