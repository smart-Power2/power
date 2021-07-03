
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Reservation } from './reservation';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservationUrl = 'http://localhost:3000/reservation'


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }

 
  getReservation() :Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.reservationUrl)
  }

  
  removeReservation(id:number):Observable<Reservation>{
    const url = `${this.reservationUrl}/${id}`;
    return this.http.delete<Reservation>(url)
  }
}
