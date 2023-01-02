import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard1 implements CanActivate {
  /**
   *
   */
  constructor(private router:Router) { 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    //for mentor
    if(localStorage.getItem("roleId")=="2"){
      this.router.navigate(["mentor-home-page"])
      return false;

    }

    return true;
    }

      
  }

  // isMentor(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   if(localStorage.getItem("roleId")=="1"){
  //     return false;
  //   }

  //   return true;
  //   }

  //   isStudent(route: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //     if(localStorage.getItem("roleId")=="2"){
  //       return false;
  //     }
  
  //     return true;
  //     }

    
