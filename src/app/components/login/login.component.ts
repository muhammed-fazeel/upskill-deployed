import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/User';
import { CartService } from 'src/app/services/cart.service';
import { Md5 } from 'ts-md5';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGrp: FormGroup;

  userName=new FormControl("dhruvfrom");
  password = new FormControl();
  roleId=new FormControl();
  email=new FormControl();
  // pictureUrl=new FormControl();
  //to convert to hash
  md5 = new Md5();

  
  constructor(private authService: AuthenticationService) {



    this.formGrp = new FormGroup({
      userName:this.userName,
      email:this.email,
      password: this.password,
      roleId:this.roleId,
      
        })
  }

  ngOnInit(): void {
  }

  loginSubmit(user:User) { 
    this.md5.appendStr(user.password);
    user.password=this.md5.end() as unknown as string;
    console.log(user.password);


    this.authService.authenticateUser(user); 
    // location.reload();
        
  }
}
