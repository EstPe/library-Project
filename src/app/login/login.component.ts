import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  User: any = []
  user = new User(0, "", "", 0, "", " ");
  users: User[] = [];
  i: number = 0;
  flag: boolean = false;
  idUser: number;



  constructor(private UserServic: UserService, private router: Router) { }
  ngOnInit(): void {

  }
  onSubmit(login) {
    //רישום
    this.UserServic.getUsers().subscribe((data: User[]) => {
      for (this.i = 0; this.i < data.length; this.i++) {
        if (login.value.Email1 == data[this.i].email && login.value.Password1 == data[this.i].password) {
          this.UserServic.setUserConected(data[this.i].id);
          this.flag = true;
          alert("The password and user is corract");
          this.router.navigateByUrl('/home');
        } else if (login.value.Email1 == data[this.i].email) {
          alert("The password not correct for this user")
          this.flag = true;
        }

      }
      if (!this.flag)
        alert("The password and user are not exits")





    });
  }


  // onSubmit(login) {
  //   //רישום

  //   this.UserServic.getUsers().subscribe((data: User[]) => {
  //     if (this.login == false) {
  //       if (this.user.name != "" && this.user.email != "") {
  //         if (data.length == 0) {//json ריק
  //           this.UserServic.addUser(this.user).subscribe((data: User) => {
  //             alert("user added sucsseflly");
  //             this.UserServic.setUserConected(data.id)
  //             this.flag = false;
  //             this.router.navigateByUrl('/home');
  //             return;

  //           });
  //         }
  //         for (this.i = 0; this.i < data.length; this.i++) {// בודק האם הוא קיים ב json
  //           if (data[this.i].email == this.user.email || data[this.i].password == this.user.password) {
  //             alert("the user or password is exist");
  //             this.flag = false;
  //             return;
  //           }
  //           else
  //             this.flag = true;
  //         }
  //         if (this.flag) {
  //           this.UserServic.addUser(this.user).subscribe((data: User) => {
  //             alert("user added sucsseflly :)");
  //             this.UserServic.setUserConected(data.id)
  //             this.router.navigateByUrl('/home');

  //           });
  //         }
  //       } else {
  //         alert("miss information");
  //       }
  //       this.users = data;
  //     }

  //     else {//התחברות

  //       for (this.i = 0; this.i < data.length; this.i++) {
  //         if (login.value.Email1 == data[this.i].email && login.value.Password1 == data[this.i].password) {
  //           this.UserServic.setUserConected(data[this.i].id);
  //           alert("The password and user is corract");
  //           this.flag = true;
  //           this.router.navigateByUrl('/home');
  //         } else if (login.value.Email1 == data[this.i].email || login.value.Password1 == data[this.i].password) {
  //           alert("The password or user correct but not for this user")
  //           this.flag = true;
  //         }
  //         else
  //           this.flag = false;
  //       }
  //       if (!this.flag) {
  //         alert("The password and user are not exits")
  //         this.flag = true;
  //       }



  //     }
  //   });
  // }


}


