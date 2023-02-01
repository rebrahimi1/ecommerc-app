import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
// import { Server, ServerResponse } from 'http';



import { map } from 'rxjs/operators'

import { Observable, of } from 'rxjs';

import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class RegisterService {
    
    constructor(private http: HttpClient, private router: Router) {

    }

    async registerCustomer(data: object) {
        let body = data;
        console.log(data);
        console.log(body);
        return this.http.post('http://localhost:3000/api/users/register/customer', body);
    }

    async registerAdmin(data: object) {
        let body = data;
        console.log(data);
        console.log(body);
        return this.http.post('http://localhost:3000/api/users/register/admin', body);
    }


}


