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

export class CartService {

    constructor(private http: HttpClient, private router: Router) {
    }




    async getCart() {
        return this.http.get('http://localhost:3000/api/carts/get/carts');
    }


    async addItem(itemId: string, price: number, qty: number){

        let body = {
            itemId: itemId,
            price: price,
            qty: qty
        };

        return this.http.post('http://localhost:3000/api/carts/add/item', body);
    }


    async updateItemQty(itemId: string, qty: number){

        let body = {
            itemId: itemId,
            qty: qty
        };

        return this.http.post('http://localhost:3000/api/carts/update/qty', body);
    }

    
    async removeItem(itemId: string){
        
        let body = {
            itemId: itemId
        };

        return this.http.post('http://localhost:3000/api/carts/remove/item', body);
    }

    

}