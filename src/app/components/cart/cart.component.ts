import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Course } from 'src/app/models/Course';
import { UpskillService } from 'src/app/services/upskill.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';
import { EnrolledCourses } from 'src/app/models/EnrolledCourse';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public product: any = [];
  public grandTotal !: number;
  rating_arr: number[] = [];
  enrolledCourse: EnrolledCourses = new EnrolledCourses(10, 10);
  // localUser:User=new User(0,1,"","","","");
  localUserId: any = 100;

  constructor(private cartService: CartService, private upskillService: UpskillService, private router: Router) { }

  ngOnInit(): void {
    // this.cartService.getProduct()
    // .subscribe(res=>{
    //   this.product=res;
    //   this.grandTotal=this.cartService.getTotalPrice();
    // })
    var courses = localStorage.getItem("localCart");
    var cart = courses !== null ? JSON.parse(courses) : "nothing";
    this.product = cart;


  }

  removeItem(courseId: Number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Course[] = JSON.parse(cartData);
      items = items.filter((items: Course) => courseId != items.courseId);
      localStorage.setItem('localCart', JSON.stringify(items));
    }
    location.reload();
  }

  emptyCart() {
    this.cartService.removeAllCart();
    localStorage.setItem("localCart", "");
    location.reload();
  }

  enroll(courseId: number) {

    this.upskillService.getUserByEmail().subscribe(res => {
      this.localUserId = res.userId;
      console.log("the userId is: " + this.localUserId);
      this.enrolledCourse.userId = res.userId;

      this.enrolledCourse.courseID = courseId;
      this.upskillService.addEnrolledCourse(this.enrolledCourse).subscribe(res => { this.removeItem(courseId);this.router.navigate(["profile"]); })
    });

  }

}
