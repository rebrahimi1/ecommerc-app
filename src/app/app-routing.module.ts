import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CustomerLoginComponent } from './login/customer-login/customer-login.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { ProductComponent } from './products/product.component';
import { CustomerRegisterationComponent } from './registeration/customer-registeration/customer-registeration.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { AuthGuardService } from './services/authGuard.service';




const routes: Routes = [
  { path: 'products', component: ProductComponent},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
  { path: 'cart', component: CartComponent},
  { path: 'payment', component: PaymentComponent},
  { path: 'register', component: RegisterationComponent},
  { path: 'login', component: LoginComponent},
  { path: 'customer-login', component: CustomerLoginComponent},
  { path: 'customer-registeration', component: CustomerRegisterationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
