import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
 constructor(private authService:AuthService,private router:Router){ }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("Chamando Guard para ",state.url);
    this.authService.url=state.url;
    if (!this.authService.isLogged){
         this.router.navigate(['/login']);
    }
    return this.authService.isLogged;
  }
}
