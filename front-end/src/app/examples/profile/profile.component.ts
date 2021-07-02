import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { ProfileService } from "app/profile.service";
import { User } from "../../user";
import { ReservationService } from "app/reservation.service";
import { Car } from "app/car";
import { Reservation } from "app/reservation";
import { Router } from "@angular/router";
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
  today:Date
  reservation:Reservation[]=[]
  data: Date ;
  focus;
  focus1;
  route: any;

  constructor(
    private userService: ProfileService,
    private reservationService: ReservationService,
    private router:Router
  ) {}

  ngOnInit() {
    this.today=new Date()
    console.log(this.today)
    console.log('//////////////')
    this.getCarsFromReservation();
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
      
      this.user = user;
    
   });
    //  console.log('userrrr',this.userService.getUser(id))
  }

  getCarsFromReservation() {
    const id = Number(localStorage.getItem("user_id"));
    console.log(id);
    this.reservationService.getReservation().subscribe((ele) => {
      console.log(ele.length)
      for (let i = 0; i < ele.length; i++) {
        if(ele[i].user){
          if (ele[i].user.id == id) {
            this.reservation.push(ele[i])
            this.carsOutSide.push(ele[i].car);
            this.carsInSide.push(ele[i].car.file2);
            
          }
        }

      }

    });
  }
  deleteReservation(str){
    this.reservationService.getReservation().subscribe((ele) => {
      console.log('here',ele)
      for (var i = 0; i < ele.length; i++) {
        console.log(ele[i].car.file1 === str)
       if (ele[i].car.file1===str){
        this.reservationService.removeReservation(ele[i].id).subscribe(car => {
          this.carsOutSide= this.carsOutSide.filter(e=>e!==str)
          this.carsInSide= this.carsInSide.filter(e=>e!==ele[i].car.file2)
          })
        return ;
       }
      }
    })
  }

  test(arg) {
    console.log(arg)
  }

  compare(i:number){
    console.log(this.reservation[i].returnItAt)
    let d=new Date(this.reservation[i].returnItAt)
    console.log(d)
    console.log(this.today)
    if(d.getTime() < this.today.getTime()){
      console.log("yes")
      return true
    }
    console.log("no")
    return false
  }

  nav(id:number){
    this.router.navigate(['/feedback/',id])
  } 

}
