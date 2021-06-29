import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-success-url',
  templateUrl: './success-url.component.html',
  styleUrls: ['./success-url.component.css']
})
export class SuccessUrlComponent implements OnInit {

  @Input()
  public alerts: Array<IAlert> = [];
  private backup: Array<IAlert>;
  constructor() {
    this.alerts.push({
      id: 1,
      type: 'success',
      strong: 'Your payment was successful! ',
      message: 'Thank you for completing your secure online payment. you will receive a confirmation email to activate your subscription ',
      icon: 'ui-2_like'
  });
  this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));

   }
   public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}
  ngOnInit(): void {
  }

}
export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}

