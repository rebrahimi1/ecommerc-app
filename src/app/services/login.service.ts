import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
// import { Server, ServerResponse } from 'http';



import { map } from 'rxjs/operators'

import { Observable, of } from 'rxjs';

import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class LoginService {
    
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) {

    }

    async loginCustomer(data: object) {
        let body = data;
        console.log(data);
        console.log(body);
        return this.http.post('http://localhost:3000/api/users/login/customer', body);
    }

    async loginAdmin(data: object) {
        let body = data;
        console.log(data);
        console.log(body);
        return this.http.post('http://localhost:3000/api/users/login/admin', body);
    }


}


