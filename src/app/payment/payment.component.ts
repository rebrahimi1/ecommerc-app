
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-payment-component',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

  items: any;
  payment: any;
  
  
  constructor(private route: ActivatedRoute, private router: Router, private paymentService: PaymentService) {
    
  }
  
  
  async ngOnInit() {
    (await this.paymentService.getCheckout()).subscribe((data) => {
      this.payment = data;
    });
  }
  
  
  async submitPayment(data: object, form: NgForm) {
    (await this.paymentService.submitPayment(form.value)).subscribe((data) => {
      console.log(data);
    });
  }


}