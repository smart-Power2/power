import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { UserService } from "../../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { User } from "../../models/user.model";
import { NgForm } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  isLoginError: boolean = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
  user: User = new User();
  email: string;
  password: string;
  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  btClick = function () {
    this.router.navigateByUrl("/signup");
  };

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("login-page");

    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
  OnSubmitLogin() {
    this.userService.userAuthentification(this.email, this.password).subscribe(
      (data) => {
        if (data) {
          console.log("hello", data);
          this.userService.storeUserData(data["access_token"]);
          // console.log(
          //   "khalil",
          //   this.userService.storeUserData(
          //     data["access_token"],
          //     data["username"]
          //   )
          // );
          this.toastr.success("Awesome!", "You are logged in!", {
            timeOut: 4000
          });
          this.router.navigate(["/"]);
          // console.log(
          //   "hello",
          //   this.userService.storeUserData(data["access_token"])
          // );
        } else {
          this.isLoginError = true;
          this.toastr.error("Oops!", this.email, {
            timeOut: 4000
          });
        }
      },
      (err: HttpErrorResponse) => {
        this.isLoginError = true;
      }
    );
  }

  // OnSubmit() {

  //   this.userService.registerUser(form.value).subscribe((data: any) => {
  //     console.log(data);
  //     if (data.success == true) {
  //       this.resetForm(form);
  //       this.toastr.success("Awesome!", "Welcome to ADN²", {
  //         timeOut: 4000
  //       });
  //       this.router.navigate(["/"]);
  //     } else {
  //       this.toastr.error("Error -", data.errors);
  //     }
  //   });
  // }
  // this function is used to empty out the registration form, in case we want to ask something
  // from the new user before redirecting them somwhere else. Like verify their account..
  // resetForm() {
  //   if (form != null) form.reset();
  //   this.user = {
  //     FirstName: "",
  //     LastName: "",
  //     email: "",
  //     phoneNumber: null,
  //     password: ""
  //   };
  // }
}
