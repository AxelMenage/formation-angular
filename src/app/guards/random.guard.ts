import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {

  constructor(private router: Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      var authorized =  new Date().getMinutes() % 2==0;
      if(!authorized){
        this.router.navigateByUrl('/accueil');
        return false;
      }
      return true;
  }
  /* Empeche de quitter une route sous certaines conditions
  canDeactivate(){

  }*/
}
