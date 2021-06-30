import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  customers:User []=[]
  companies:User []=[]

  constructor(private userService :UserService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe((users)=>{
      this.customers=users.filter((user)=>user.type==='customer')
      this.companies=users.filter((user)=>user.type==='company')
      console.log(this.customers)
    })
  }

  

}
