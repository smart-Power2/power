import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-list-cars',
  templateUrl: './list-car.component.html',
  styleUrls: ['./list-car.component.css']
})
export class ListCarComponent implements OnInit {
   brand : string 
   noMore:boolean=true
   currentRate = 8;
   curentCars=3
   cars:Car[]=[];
   allCars:Car[]=[]
   name:string; 
  constructor(private CarService : CarService) {}

  ngOnInit(): void {
    this.getCars()
    
  }
   
  getCars(){
    this.CarService.getCars()
    .subscribe((cars)=>{
      this.allCars=cars
      this.cars=cars.filter((e,i)=>{
        return i<this.curentCars
      })
      console.log(this.allCars)
    })
  }
 
  moreCars(num){
    if(this.allCars.length-1===this.curentCars){
      this.noMore=false
    }
    this.curentCars+=num
    console.log(this.curentCars);
    this.getCars()
  }
  

//   search (){
//     if(this.brand!==""){
//      this.allCars = this.allCars.filter(res=>res.brand.toLocaleLowerCase().match(this.brand.toLocaleLowerCase()))
//       this.ngOnInit()
//       console.log(this.brand);
//       this.getCars()
//     }
// };

  
}
