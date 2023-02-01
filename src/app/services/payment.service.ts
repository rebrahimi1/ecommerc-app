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

export class PaymentService {
    constructor(private http: HttpClient, private router: Router) {

    }

    async getCheckout(){
        return this.http.get('http://localhost:3000/api/carts/payment');
    }

    async submitPayment(data: object) {
        let body = data;
        return this.http.post('http://localhost:3000/api/carts/purchase', body);
    }

}