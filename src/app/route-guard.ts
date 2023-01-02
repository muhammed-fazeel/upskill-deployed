import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  /**
   *
   */
  constructor(private router:Router) { 
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(localStorage.getItem("token")!=null){
      return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
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

    
}