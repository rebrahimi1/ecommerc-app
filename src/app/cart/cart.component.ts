
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-cart-component',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {

  products: any;
  cart: any;


  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService, private cartService: CartService) {

  }
    async ngOnInit() {
      (await this.cartService.getCart()).subscribe((data) => {
        console.log(data);
        this.cart = data;
      });
    }

    // async updateQty(form: NgForm, itemId: string) {
    //   await this.cartService.updateItemQty(itemId, form.value.qty);
    //   form.resetForm();
    // }




    // async removeItem(itemId: string) {
    //   await this.cartService.removeItem(itemId);

    // }

    async goToCheckout() {
      this.router.navigate(['/payment']);
    }

    
}