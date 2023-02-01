
import { ActivatedRoute, Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';
import { AuthService } from '../services/auth.service';



@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['../registeration/registeration.component.css']
})

export class LoginComponent implements OnInit {
    constructor(private route: ActivatedRoute, private router: Router, private loginService: LoginService, private authService: AuthService) {

    }
    ngOnInit() {
  }



  async loginAdmin(form: NgForm) {

    console.log(form.value);

    (await this.loginService.loginAdmin(form.value)).subscribe((data) => {
      console.log(data);
      this.authService.setUserInfo({user: data['user']});
      this.router.navigate(['/dashboard']);
    });

  }



}