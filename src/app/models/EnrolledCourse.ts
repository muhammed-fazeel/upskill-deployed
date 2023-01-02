import { Component } from "@angular/core";
import { User } from "./User";

export class EnrolledCourses{

    enrolledCoursesId?:number;
    userId?:number;
    courseID:number;
    constructor(userId:number,courseID:number){
        this.userId=userId;
        this.courseID=courseID;
    }
}