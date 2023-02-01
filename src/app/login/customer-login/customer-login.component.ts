
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-customer-login-component',
  templateUrl: './customer-login.component.html',
  styleUrls: ['../../registeration/registeration.component.css']
})

export class CustomerLoginComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService, private authService: AuthService) {

  }
  
  ngOnInit() {

  }
  
  async loginCustomer(form: NgForm) {
    console.log(form.value);
    (await this.loginService.loginCustomer(form.value)).subscribe((data) => {
      console.log(data['user']);
      this.authService.setUserInfo({user: data['user']});
      this.router.navigate(['/products']);
    });

  }



}