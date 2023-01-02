import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  EmailServiceComponent  from './components/email-service/email-service.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { RouteGuard } from './route-guard';
import { HeaderComponent } from './components/header/header.component';
import { BaseComponent } from './components/base/base.component';
import { AllCategoriesComponent } from './components/all-categories/all-categories.component';
import { HomeComponent } from './components/home/home.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NextDirective } from './next.directive';
import { PrevDirective } from './prev.directive';
import { Slider2Component } from './components/slider2/slider2.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { CoursePageComponent } from './components/course-page/course-page.component';
import { RouteGuard2 } from './route-guard2';
import { RouteGuard1 } from './route-guard1';
import { CartComponent } from './components/cart/cart.component';
import { MentorHomeComponent } from './components/mentor-home/mentor-home.component';
import { NavbargoodlookingComponent } from './components/navbargoodlooking/navbargoodlooking.component';
import { Features2Component } from './components/features2/features2.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EnrolledCoursesComponent } from './components/enrolled-courses/enrolled-courses.component';
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';
import { UploadedCoursesComponent } from './components/uploaded-courses/uploaded-courses.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes=[
  {
    path:"",
    component:BaseComponent,
    canActivate:[RouteGuard1]

  },

  {
    path:"login",
    component:LoginComponent,
    
  },
  {
    path:"home",
    component:HomeComponent    
  },

  {
    path:"profile",
    component:ProfileComponent,
    canActivate:[RouteGuard]
  },

  {
    path:"add-video",
    component:AddVideoComponent,
    canActivate:[RouteGuard,RouteGuard2]
  },

  {
    path:"sign-up",
    component:SignUpComponent
  },
  {
    path:"courses/:id",
    component:CourseListComponent
  },
  {
    path:"course-page/:id",
    component:CoursePageComponent
  },
  {
    path:"add-course",
    component:AddCourseComponent,
    canActivate:[RouteGuard,RouteGuard2]
  },
  {
    path:"cart",
  component:CartComponent
  },
  {
    path:"aboutUs",
    component:AboutUsComponent
  },
  {
    path:"mentor-home-page",
    component:MentorHomeComponent,
    canActivate:[RouteGuard,RouteGuard2]
  }
  ,{
    path:"dashboard",
    component:DashboardComponent,
    canActivate:[RouteGuard,RouteGuard2]
  }

]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    EmailServiceComponent,
    ProfileComponent,
    LoginComponent,
    HeaderComponent,
    BaseComponent,
    AllCategoriesComponent,
    HomeComponent,
    AddVideoComponent,
    SignUpComponent,
    NextDirective,
    PrevDirective,
    Slider2Component,
    CoursePageComponent,
    CourseListComponent,
    AddCourseComponent,
    CartComponent,
    MentorHomeComponent,
    Features2Component,
    AboutUsComponent,
    HomePageComponent,
    NavbargoodlookingComponent,
    EnrolledCoursesComponent,
    UploadedCoursesComponent,
    TestimonialsComponent,
    DashboardComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CarouselModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
