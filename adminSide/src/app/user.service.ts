import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {User} from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:3000/user'
  

  constructor( private http: HttpClient) { }
  
  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl)
  }
  
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url)
  }

  deleteUser(id:number):Observable<User>{
    const url = `${this.userUrl}/${id}`;
    return this.http.delete<User>(url)
  }
}
