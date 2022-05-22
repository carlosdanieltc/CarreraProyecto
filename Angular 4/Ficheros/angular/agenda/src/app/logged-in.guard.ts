import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

export class LoggedInGuard implements CanActivate{

  // constructor(private userService:  UserService){

  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // if(userService.getUser().isAdmin()){
    //   return true;
    // }

    return true;
  }

}
