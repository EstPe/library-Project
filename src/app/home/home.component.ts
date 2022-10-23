import { Component, OnInit } from '@angular/core';
import { CategoriesService, category_of_books } from '../categories.service';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list_users = []
  list_of_category: category_of_books[] = []
  num = 0
  discount: number = 0.80;
  userInfo = new User(0, "", "", 0, "", "");
  User_list = []

  count() {
    return this.num++;
  }
  constructor(private user: UserService, private category: CategoriesService) { }
  getProducts() {
    this.category.getProducts().subscribe((data: category_of_books[]) => {
      this.list_of_category = data;
    });
  }
  getUser() {
    this.user.getUsers().subscribe((data: User[]) => {
      for (let i = 0; i < data.length; i++) {
        if (this.user.returnUserConected() == data[i].id)
          this.userInfo = data[i];
      }
      this.User_list = data;

    });
  }

  ngOnInit(): void {
    this.getProducts();
    this.getUser();
    // this.list_of_category = this.category.getlist_of_category_books();
    // this.list_users = this.user.getTheUser();
  }
}
