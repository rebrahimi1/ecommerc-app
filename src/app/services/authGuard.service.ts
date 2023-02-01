import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule, Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate {
    
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) {

    }

    canActivate() {
        if(this.authService.isAuthenticated()) {
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }

}