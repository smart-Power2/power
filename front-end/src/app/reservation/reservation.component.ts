import { Component, OnInit } from "@angular/core";
import { ReservationService } from "app/reservation.service";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { Reservation } from "app/reservation";
import { Car } from "app/car";
@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.css"],
})
export class ReservationComponent implements OnInit {
  car:Car
  takeItAt:any
  returnItAt:any

  reservation : Reservation[] =[]
  reservationForm: FormGroup;
  constructor(private ReservationService: ReservationService,public fb: FormBuilder,private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCar()
  }

    getCar(){
      const id = parseInt(this.route.snapshot.paramMap.get('id')!);
      this.ReservationService.getCar(id)
      .subscribe(car => this.car = car);
    }
    editPrice(){
      
    }
  addReservation() {
    var {year, month, day} = this.takeItAt
    this.takeItAt = new Date(year, month, day)
    var {year, month, day} = this.returnItAt
    this.returnItAt = new Date(year, month, day)
    const data = {
      takeItAt: this.takeItAt,
      returnItAt: this.returnItAt,
      car: parseInt(this.route.snapshot.paramMap.get("id")),
      user:+localStorage.getItem('user_id')
    }
    
    console.log((JSON.stringify(data.returnItAt).split('-')[3]))
    console.log(data);

    this.ReservationService.addReservation(data).subscribe((newReservation) => {
      this.reservation.push(newReservation);
    
    });
  }

  
}
