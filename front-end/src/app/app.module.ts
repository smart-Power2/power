import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
@NgModule({
  declarations: [AppComponent, NavbarComponent, SignupComponent],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    ComponentsModule,
    ExamplesModule,
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
  providers: [UserService, ValidateService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
