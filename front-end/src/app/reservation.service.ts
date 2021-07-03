import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Car} from './car';
import { Observable } from 'rxjs';
import { Reservation } from './reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservationUrl = 'http://localhost:3000/reservation'
  private carUrl = 'http://localhost:3000/car'


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

  addReservation(reservation:Reservation):Observable<Reservation>{
    return this.http.post<Reservation>(this.reservationUrl, JSON.stringify(reservation), this.httpOptions)
  }
 
  getReservation() :Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.reservationUrl)
  }

  getCar(id: number): Observable<Car> {
    const url = `${this.carUrl}/${id}`;
    return this.http.get<Car>(url)
  }
  removeReservation(id:number):Observable<Reservation>{
    const url = `${this.reservationUrl}/${id}`;
    return this.http.delete<Reservation>(url)
  }
}
