
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import { UploadService } from 'src/app/services/upload.service';
import { Form, NgForm } from '@angular/forms';


@Component({
  selector: 'app-product-component',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: any;
  filteredProducts: any;
  
  imageObj: any;
  imageUrl: any;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private cartService: CartService, private uploadService: UploadService) {

  }
  
  
  async ngOnInit() {
    
    (await this.productService.getProducts()).subscribe((data) => {
      console.log(data);
      this.products = data;
    });
  }






  async filterProducts(form: NgForm) {
    (await this.productService.filterProducts(form.value)).subscribe((data) => {
      this.filteredProducts = this.products;
      this.products = data;
      form.resetForm();
    });

  }

  async resetFilter() {
    // let product = await this.productService.getProducts();
    this.products = this.filteredProducts;
  }





  async addToCart(itemId: string, price: number, form: NgForm) {
    (await this.cartService.addItem(itemId, price, form.value.qty)).subscribe((data) => {
      console.log(data);
      form.resetForm();
    });
  }


  async goToCart() {
    this.router.navigate(['/cart']);
  }

}