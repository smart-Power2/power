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
  cars: Car[] = [];
  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  // styles: any[] = [
  //   {
  //     featureType: "water",
  //     elementType: "geometry",
  //     stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
  //   },
  //   {
  //     featureType: "landscape",
  //     elementType: "geometry",
  //     stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "geometry.fill",
  //     stylers: [{ color: "#ffffff" }, { lightness: 17 }],
  //   },
  //   {
  //     featureType: "road.highway",
  //     elementType: "geometry.stroke",
  //     stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
  //   },
  //   {
  //     featureType: "road.arterial",
  //     elementType: "geometry",
  //     stylers: [{ color: "#ffffff" }, { lightness: 18 }],
  //   },
  //   {
  //     featureType: "road.local",
  //     elementType: "geometry",
  //     stylers: [{ color: "#ffffff" }, { lightness: 16 }],
  //   },
  //   {
  //     featureType: "poi",
  //     elementType: "geometry",
  //     stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
  //   },
  //   {
  //     featureType: "poi.park",
  //     elementType: "geometry",
  //     stylers: [{ color: "#dedede" }, { lightness: 21 }],
  //   },
  //   {
  //     elementType: "labels.text.stroke",
  //     stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
  //   },
  //   {
  //     elementType: "labels.text.fill",
  //     stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
  //   },
  //   { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
  //   {
  //     featureType: "transit",
  //     elementType: "geometry",
  //     stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
  //   },
  //   {
  //     featureType: "administrative",
  //     elementType: "geometry.fill",
  //     stylers: [{ color: "#fefefe" }, { lightness: 20 }],
  //   },
  //   {
  //     featureType: "administrative",
  //     elementType: "geometry.stroke",
  //     stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
  //   },
  // ];
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
          
          this.cars.push(ele[i].car.file1);
        }
      }

    });
  }
}
