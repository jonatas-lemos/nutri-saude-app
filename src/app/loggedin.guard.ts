import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from "./services/login.service";

@Injectable({
    providedIn: 'root'
  })
export class LoggedInGuard implements CanActivate{
    
    constructor(private loginService: LoginService){
            }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const loggedIn = this.loginService.isLoggedIn();
        if(!loggedIn){
            this.loginService.handleLogin();
            return false;
        }

        return true;      
    }

    
}