import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Car } from  './car'

@Injectable({
  providedIn: 'root',
})
export class PostService {
  httpOptions = {
    headers: new HttpHeaders({}),
  };
  private carUrl = 'http://localhost:3000/car/create';
  constructor(private http: HttpClient) {}

  addCar(car: any): Observable<Car> {
    return this.http.post<Car>(this.carUrl, car);
  }
}
