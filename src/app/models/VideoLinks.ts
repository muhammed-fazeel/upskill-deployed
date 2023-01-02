import { Component } from "@angular/core";

export class VideoLinks {
    videoLinksId?:number;
    courseId:number;
    url:string
    duration:number;
    title:string;
    constructor(courseId:number,url:string,duration:number,title:string){
        this.courseId=courseId;
        this.url=url;
        this.duration=duration;
        this.title=title;

    }
}