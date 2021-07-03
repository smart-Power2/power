import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user : User  | undefined
  constructor(private userService : UserService , private route: ActivatedRoute,) { }

  ngOnInit() {
    this.getUser()
  }

  getUser() : void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log(id)
    this.userService.getUser(id)
      .subscribe(car => this.user = car);
  }
  deleteUser(){
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);
    this.userService.deleteUser(id).subscribe((ele) => {
      this.user=undefined
    })
  }
}
