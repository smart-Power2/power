import { Component, OnInit } from '@angular/core';
import { FeedbackService} from '../feedback.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { ActivatedRoute } from '@angular/router'
import { Feedback } from "../feedback";
import {Location} from '@angular/common'


@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback:Feedback[]=[];
  private idCar:number
    
  constructor(private feedbackService : FeedbackService ,
     public fb:FormBuilder ,
      private route: ActivatedRoute ,
      private location :Location,
      ) {
    this.feedbackForm=this.fb.group({
      content: ['']
    })
    const routeParams = this.route.snapshot.paramMap;
    this.idCar = Number(routeParams.get('idCar'));
   }
   
  ngOnInit(): void {
    this.getFeedback();
  }

  registerFeedback(): void{
    const id = Number(localStorage.getItem('user_id'))
    const f={
      idCar:this.idCar,
      idUser:id,
      content:this.feedbackForm.get('content').value
    }
   this.feedbackService.addFeedback(f).subscribe(newFeedback=>{
    this.feedback.push(newFeedback)
   });
  }

  getFeedback(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.feedbackService.sendGetRequest().subscribe(feedback => this.feedback = feedback);
  }

  deleteFeedback(feedback:Feedback):void{
    this.feedback = this.feedback.filter(h => h !== feedback);
    this.feedbackService.deleteFeedback(feedback.id).subscribe(oneFeedback =>{
      this.feedback.splice(this.feedback.indexOf(oneFeedback),0)
    });
  }

goBack():void{
  this.location
}

  updateFeedBack(feedback:Feedback):void{ 
    if(this.feedback){
      this.feedbackService.updateFeedback(feedback).subscribe(x=>{
        const currentFeedBack = this.feedback.indexOf(feedback)
        this.feedback[currentFeedBack]=x
      }) }
  }
}
