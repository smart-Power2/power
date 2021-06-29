import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-fail-url',
  templateUrl: './fail-url.component.html',
  styleUrls: ['./fail-url.component.css']
})
export class FailUrlComponent implements OnInit {

  @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    constructor() {
        this.alerts.push( 
          {
            id: 1,
            type: 'danger',
            strong: 'FAILED  !',
            message: ' payment is refused, the order is cancelled. ',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
    }
    ngOnInit(){}

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
export interface IAlert {
  id: number;
  type: string;
  strong?: string;
  message: string;
  icon?: string;
}
