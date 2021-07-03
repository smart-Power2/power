import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsComponent } from "./components/components.component";
import { CarDetailComponent } from './car-detail/car-detail.component';
import { LandingComponent } from "./examples/landing/landing.component";
import { LoginComponent } from "./examples/login/login.component";
import { ProfileComponent } from "./examples/profile/profile.component";
import { NucleoiconsComponent } from "./components/nucleoicons/nucleoicons.component";
import { SignupComponent } from "./signup/signup.component";
import { SearchComponent } from "./search/search.component";
import {FormComponent} from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ListCarComponent } from './list-car/list-car.component';
import { FeedbackComponent } from "./feedback/feedback.component";
import { MapComponent } from "./map/map.component"


const routes: Routes = [
  { path: "", redirectTo: "index", pathMatch: "full" },
  { path: 'form', component: FormComponent },
  { path: 'payment', component: PaymentComponent },
  { path: "index", component: ComponentsComponent },
  { path: 'allcars',    component: ListCarComponent },
  { path: 'car/:id',      component: CarDetailComponent },
  { path: 'reservation/:id',       component: ReservationComponent },
  { path: "search", component: SearchComponent },
  { path: "signup", component: SignupComponent },
  { path: "nucleoicons", component: NucleoiconsComponent },
  { path: "examples/landing", component: LandingComponent },
  { path: "examples/login", component: LoginComponent },
  { path: "examples/profile", component: ProfileComponent },
  {path:"feedback/:idCar",component:FeedbackComponent},
  {path:"map",component:MapComponent}
];

@NgModule({
  imports: [CommonModule, BrowserModule, RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {}
