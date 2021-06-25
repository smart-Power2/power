import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { ProfileService } from "app/profile.service";
import { User } from "../../user";
import { ReservationService } from "app/reservation.service";
import { Car } from "app/car";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.scss"],
})
export class ProfileComponent implements OnInit {
  user: User = null;
  carsOutSide: Car[] = [];
  carsInSide: Car[] = [];
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  
  data: Date = new Date();
  focus;
  focus1;
  route: any;

  constructor(
    private userService: ProfileService,
    private reservationService: ReservationService
  ) {}

  ngOnInit() {
    this.getCars();
    this.getUser();
    var rellaxHeader = new Rellax(".rellax-header");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }

  getUser(): void {
    const id = Number(localStorage.getItem("user_id"));
    console.log(id);
    this.userService.getUser(id).subscribe((user) => {
      console.log(user);
      this.user = user;
    });
    //  console.log('userrrr',this.userService.getUser(id))
  }

  getCars() {
    var id = Number(localStorage.getItem("user_id"));
    this.reservationService.getReservation().subscribe((ele) => {
      console.log(ele)
      console.log('saluuuuuuuuuut',ele[0].user);
      for (var i = 0; i < ele.length; i++) {
        if (ele[i].user.id === id) {
          console.log('a77777777777',ele[i]);
          
          this.carsOutSide.push(ele[i].car.file1);
          this.carsInSide.push(ele[i].car.file2);
        }
      }

    });
  }


}
