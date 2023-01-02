import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/models/Course';
import { CartService } from 'src/app/services/cart.service';
import { UpskillService } from 'src/app/services/upskill.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {


  courses_list?: Course[] = [];
  courses: Course[] = []
  cor: Course = new Course(1, "", 1, "", 1, 1, 1, "", "");
  rating_arr: number[] = [];
  formModal: any;

  constructor(private upskillService: UpskillService, private activatedRoute: ActivatedRoute, private cartService:CartService) {
  }
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      let catId = params["id"];

    this.upskillService.getCoursesByCat(catId)
        .subscribe(data => {
          this.courses_list = data;
          console.log('data1:', data);
          console.log('cl:', this.courses_list);
        })
    });

    
  }
  // show(courseId:Number){
  //   this.upskillService.getCourseById(courseId).subscribe(data => {
  //     this.rating_arr = [];
  //     for (let index = 0; index < this.cor.rating; index++) {
  //       this.rating_arr.push(index);
  //     }
  //   });
  addToCart(cor:Course) {
    this.cartService.addLocalCart(cor);
    this.formModal.hide();
  }


}
