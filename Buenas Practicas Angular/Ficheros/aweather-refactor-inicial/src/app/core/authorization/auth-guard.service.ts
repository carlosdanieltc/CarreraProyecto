import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private _router: Router
  ) { }

  canActivate() {
    if (this.userAuthenticated()) {
      return true;
    }

    this._router.navigate(['/home/login']);
    return false;
  }

  private userAuthenticated(): boolean {
    return true;
  }
}
