import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoLinks } from 'src/app/models/VideoLinks';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  //add functionality so it can only be accessed from the mentor role

  video:VideoLinks=new VideoLinks(1,"",10,"");

  constructor(private upskillService:UpskillService,private router:Router) { }

  ngOnInit(): void {
  }

  addVideo(){
    this.upskillService.addVideoToCourse(this.video).subscribe(res=>{this.router.navigate(["/course-page/"+this.video.courseId]);});
  }

}
