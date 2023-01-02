import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TokenResponse } from '../models/token-response';
import { User } from '../models/User';
import { CartService } from './cart.service';
import { UpskillService } from './upskill.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userId:number=0;

  constructor(private http: HttpClient, private router: Router,private cartService:CartService,private upSkillService:UpskillService) { }


   authenticateUser(user: User) {
    this.http.post<TokenResponse>("https://localhost:7285/api/Login/Login", {
      "userName":user.userName,
      "password":user.password,
      "email":user.email,
      "roleId":user.roleId,
      
    })
      .subscribe(
        res=> {
          console.log(res);          
          //redirect to home
          localStorage.setItem("token", res.token);
          localStorage.setItem("email",user.email);
          localStorage.setItem("roleId",user.roleId as unknown as string)

          localStorage.setItem("userId",user.userId as unknown as string )

          this.cartService.flag=true;

          // this.router.navigate(["/"]);

          // location.reload();

          // this.router.navigate(['/profile'])

          this.router.navigate(['/'])
  .then(() => {
    window.location.reload();
  });
          
        },
        err => { 
          console.log(err.status);
         });
  }

  checkRole(){

  }


}