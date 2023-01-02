import { Component } from "@angular/core";

export class User {
    userId?:number;
    roleId:number;
    userName:string;
    password:string;
    email:string;
    pictureUrl?:string;
    constructor(userId:number,roleId:number,userName:string,password:string,email:string,pictureUrl:string){
    //    this.userId=userId;
       this.roleId=roleId;
       this.userName=userName;
       this.password=password;
       this.email=email;
       this.pictureUrl=pictureUrl;

    }
}