import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbargoodlooking',
  templateUrl: './navbargoodlooking.component.html',
  styleUrls: ['./navbargoodlooking.component.css']
})
export class NavbargoodlookingComponent implements OnInit {
  logInFlag:boolean=true;
  public totalItem:number=0;
  mentor:boolean=false;
  constructor(private cartService:CartService,private router:Router) {
    console.log('flag:',this.cartService.flag);
    this.logInFlag=this.cartService.flag;
   }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res =>{
      this.totalItem=res.length;
    })

    if (localStorage.getItem("token")==null){
      this.logInFlag=true;
    }
    else{
      this.logInFlag=false;
    }

    if(localStorage.getItem("roleId")=="2"){
      this.mentor=true;
    };
  }
  logout(){
    localStorage.clear();
    this.logInFlag=false;
    // this.router.navigate(['/login'])
  }

}
