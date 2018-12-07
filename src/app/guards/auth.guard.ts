import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route, state: RouterStateSnapshot) {
    return this.authService.user.pipe(map (user => {
      if (user) {return true; }
      this.router.navigate(['/login'], {queryParams: {returnUrl : state.url}});
      return false;
    }));
  }
}
