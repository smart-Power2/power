import { Component, OnInit } from "@angular/core";
import { UserService } from "../services/user.service";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { User } from "../models/user.model";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {

  user: User = new User();
  FirstName: string;
  LastName: string;
  email: string;
  phoneNumber: number;
  password: string;
  confirmPassword: string;
  type: string;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
  }


  OnSubmit() {
    if(this.password != this.confirmPassword) alert('Make sure the passords match')
    else {
      const user = {
      FirstName: this.FirstName,
      LastName: this.LastName,
      email: this.email,
      phoneNumber: this.phoneNumber,
      password: this.password,
      type: this.type
    };
    this.userService.registerUser(user).subscribe((data) => {
      console.log(data);
      if (data) {
        this.toastr.success("Awesome!", "Welcome to ADN²", {
          timeOut: 4000
        });
        this.router.navigate(["/examples/login"]);
      }
      else {
        this.toastr.error("Error -", this.FirstName);
      }
    });
    }
    
    
  }
}
