import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { ComponentsComponent } from "./components/components.component";
import { LandingComponent } from "./examples/landing/landing.component";
import { LoginComponent } from "./examples/login/login.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { SignupComponent } from "./signup/signup.component";
import { SearchComponent } from "./search/search.component";
import {FormComponent} from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessUrlComponent } from '../app/success-url/success-url.component';
import { FailUrlComponent } from '../app/fail-url/fail-url.component';

const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: 'form', component: FormComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'payment/failPayment',    component: FailUrlComponent },
  { path: 'payment/successPayment',    component: SuccessUrlComponent },
  { path: "index", component: ComponentsComponent },
  { path: "search", component: SearchComponent },
  { path: "signup", component: SignupComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "examples/landing", component: LandingComponent },
  { path: "examples/login", component: LoginComponent },
  { path: "examples/profile", component: ProfileComponent }
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
