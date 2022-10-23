import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  User_list = []
  i: number;
  userInfo = new User(0, "", "", 0, "", "");
  constructor(private user: UserService) { }


  getUser() {
    this.user.getUsers().subscribe((data: User[]) => {
      for (this.i = 0; this.i < data.length; this.i++) {
        if (this.user.returnUserConected() == data[this.i].id)
          this.userInfo = data[this.i];
      }
      this.User_list = data;

    });
  }
  ngOnInit(): void {
    this.getUser();
  }

}
