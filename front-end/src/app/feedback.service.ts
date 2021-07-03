import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Feedback } from './feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  private feedbackUrl = 'http://localhost:3000/feedback/create';
  private feedbackUrl1 = 'http://localhost:3000/feedback';
  private feedbackGetUrl = "http://localhost:3000/feedback";


  constructor(private http:HttpClient) { }

  addFeedback(feedback:Feedback): Observable<Feedback> {
    let headers = new HttpHeaders({
      Authorization: localStorage.getItem("id_token"),
      "Content-Type": "application/json"
    });
    console.log(feedback)
   return this.http.post<Feedback>(this.feedbackUrl, JSON.stringify(feedback),{headers})

  }
    
  
  sendGetRequest() {
    return this.http.get<Feedback[]>(this.feedbackGetUrl);
  }

 deleteFeedback(id : number):Observable<Feedback> {
       const url = `${this.feedbackUrl1}/${id}`
       return this.http.delete<Feedback>(url,this.httpOptions)
 }

 updateFeedback(feedback : Feedback):Observable<any>{
   return this.http.put(this.feedbackUrl1,feedback,this.httpOptions)
 }
}
