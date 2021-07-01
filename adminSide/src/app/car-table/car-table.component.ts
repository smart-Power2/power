import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { ReservationService } from '../reservation.service';
import { Reservation } from '../reservation';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {
  cars:Car[]=[]
  reservations:Reservation[]=[]

  constructor(private carService : CarService , private reservationService:ReservationService) { }

  ngOnInit(): void {
    this.getCars()
    this.getReservations()
  }

  getCars(){
    this.carService.getCars().subscribe((cars)=>{
      this.cars=cars
    })
  }

  getReservations(){
    this.reservationService.getReservation().subscribe((reservations)=>{
      this.reservations=reservations
      console.log('this is reservation ',this.reservations,this.reservations[0].id)
    } )
  }
}
