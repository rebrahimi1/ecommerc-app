import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { map } from 'rxjs/operators'

import { Observable, of } from 'rxjs';

import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    
    constructor(private http: HttpClient, private router: Router) {

    }

    public isAuthenticated(): Boolean {
        let userData = localStorage.getItem('user');
        if(userData && JSON.parse(userData)){
            return true;
        } else {
            return false;
        }
    }

    public setUserInfo(user) {
        console.log(user);
        localStorage.setItem('user', JSON.stringify(user));
    }

    public validateUser() {
        let body = {
        };
        return this.http.post('http://localhost:3000/api/users/authenticate', body);
    }

}