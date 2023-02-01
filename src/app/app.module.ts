import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//// COMPONENTS ////

import { AppComponent } from './app.component';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion'
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './products/product.component';
import { PaymentComponent } from './payment/payment.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { CustomerRegisterationComponent } from './registeration/customer-registeration/customer-registeration.component';





@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    PaymentComponent,
    RegisterationComponent,
    NavbarComponent,
    DashboardComponent,
    LoginComponent,
    CustomerLoginComponent,
    CustomerRegisterationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
