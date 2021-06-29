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
import { SuccessUrlComponent } from '../app/success-url/success-url.component';
import { FailUrlComponent } from '../app/fail-url/fail-url.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, SignupComponent, SearchComponent,FormComponent, PaymentComponent, SuccessUrlComponent,
    FailUrlComponent],
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
