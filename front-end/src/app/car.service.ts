import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Car} from './car'
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carUrl = 'http://localhost:3000/car'
  private feedbackCar='http://localhost:3000/feedback'  
  constructor( private http: HttpClient) { }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl)
  }
  
  getCar(id: number): Observable<Car> {
    const url = `${this.carUrl}/${id}`;
    return this.http.get<Car>(url)
  }

  getFeedback(id:number){
    const url = `${this.feedbackCar}/${id}`;
    console.log(url)
    return this.http.get<Feedback>(url)
  }
}
