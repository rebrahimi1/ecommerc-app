
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-customer-registeration-component',
  templateUrl: './customer-registeration.component.html',
  styleUrls: ['../registeration.component.css']
})

export class CustomerRegisterationComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private registerService: RegisterService, private authService: AuthService) {

    }
    ngOnInit() {
  }




  async registerCustomer(form: NgForm) {

    console.log(form.value);

    (await this.registerService.registerCustomer(form.value)).subscribe((data) => {
      console.log(data['user']);
      this.authService.setUserInfo({user: data['user']});
      this.router.navigate(['/products']);
    });

  }




}