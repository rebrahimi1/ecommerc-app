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

export class ProductService {
    
    constructor(private http: HttpClient, private router: Router) {

    }

    async getProducts() {
        return this.http.get('http://localhost:3000/api/products/tires');
    }

    async getProductById(itemId: string) {
        return this.http.get('http://localhost:3000/api/products/tires/' + itemId);
    }

    async filterProducts(params: object) {
        let body = params;
        return this.http.post('http://localhost:3000/api/products/tires', body);
    }

    async addNewProduct(brand: string, size: string, price: number, car: string, img: object) {
        let body = ({
            brand: brand,
            size: size,
            price: price,
            car: car,
            img: img,
        });
        return this.http.post('http://localhost:3000/api/products/new/tire', body);
    }

    async removeProduct(itemId: string) {
        let body = {
            itemId: itemId
        }
        return this.http.post('http://localhost:3000/api/products/remove/tire', body);
    }

    async getMsg(msg: string) {
        let body = {
            msg: msg
        };
        return this.http.post('http://localhost:3000/api/products/msg', body);
    }
    


}


