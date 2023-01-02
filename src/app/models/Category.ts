import { Component } from "@angular/core";

export class Category{
    categoryId:number;
    categoryName:string
    imageUrl:string
    constructor(categoryId:number,categoryName:string,imageUrl:string){
        this.categoryId=categoryId;
        this.categoryName=categoryName;
        this.imageUrl=imageUrl;
    }
}