import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";
import { ExamplesModule } from "./examples/examples.module";
import { HttpClientModule,HttpHeaders} from "@angular/common/http";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { SignupComponent } from "./signup/signup.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { UserService } from "./services/user.service";
import { AuthGuard } from "./auth.guard";
 import {ToastrModule} from "ngx-toastr";
import { JwtModule } from "@auth0/angular-jwt";
import { ValidateService } from './services/validate.service';
import { SearchComponent } from './search/search.component';
import {PostService} from './post.service';
import { FormComponent } from './form/form.component';
import { PaymentComponent } from './payment/payment.component';
import { ListCarComponent } from './list-car/list-car.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RatingComponent } from './rating/rating.component';
import {FeedbackComponent} from './feedback/feedback.component';
import { MapComponent } from './map/map.component'
@NgModule({
  declarations: [AppComponent,FeedbackComponent, NavbarComponent, SignupComponent, SearchComponent, ListCarComponent, CarDetailComponent, ReservationComponent, RatingComponent, MapComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: function tokenGetter() {
          return localStorage.getItem("id_token");
        }
      }
    }),
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    })
  ],
  providers: [UserService, ValidateService, AuthGuard,PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
