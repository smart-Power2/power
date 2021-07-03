import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Car } from '../car';
import { CarService } from '../car.service';
import { FeedbackService } from 'app/feedback.service';
import { Feedback } from '../feedback'

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {
  car : Car | undefined
  feedback : Feedback |undefined
  id:number
  constructor(
    private route: ActivatedRoute,
    private CarService: CarService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getCar()
    this.getFeedback()
  }
  getCar() : void{
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(this.id)
    this.CarService.getCar(this.id)
      .subscribe(car => this.car = car);
  }

  getFeedback(){
    this.CarService.getFeedback(this.id).subscribe
    (feedback=> this.feedback=feedback)
  }
  
}
