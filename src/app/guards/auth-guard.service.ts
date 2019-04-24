import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private route: Router ) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    
    if(localStorage.getItem('chave') == 'liberado'){
      return true;
    } else {
      alert('Favor efetuar login!');
      this.route.navigate(["/login"]);
      return false;
    }
  }
}