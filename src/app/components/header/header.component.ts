import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //fix this thing

  logInFlag:boolean=true;
  public totalItem:number=0;
  mentor:boolean=false;

  constructor(private cartService:CartService) { 

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
      //this.cartService.flag=true;
    }
    else{
      this.logInFlag=false;
      //this.cartService.flag=false;
    }
    // location.reload();

    if(localStorage.getItem("roleId")=="2"){
      this.mentor=true;
    };
    
  }

  logout(){
    localStorage.clear();
    this.logInFlag=false;
  }



}
