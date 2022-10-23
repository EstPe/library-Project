import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { CartsService, Cart } from '../carts.service';
import { CategoriesService, category_of_books } from '../categories.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  list_from_cart = [];

  confirm: boolean = true;
  show_confirm() {
    this.confirm = false;
  }

  cart: Cart[] = [];
  Category: category_of_books[] = [];
  Category2: category_of_books[] = [];
  sum: number = 0;
  total() {
    for (let i of this.Category2) {
      this.sum += i.Price;
    }
  }
  userId: number;
  j: number = 0;
  constructor(
    private carts: CartsService,
    private CategoriesService: CategoriesService,
    private user: UserService
  ) {}
  ngOnInit(): void {
    // this.list_from_cart = this.carts.getCart_info();
    this.userId = this.user.returnUserConected();
    this.total();
    this.Cart();
  }
  Cart() {
    if (this.userId != undefined) {
      this.carts.getProducts().subscribe((data: Cart[]) => {
        for (let i = 0; i < data.length; i++) {
          if (this.userId == data[i].userId) {
            this.cart[this.j++] = data[i];
            this.CategoriesService.getProductsToCart(
              this.cart[this.j - 1].SerialNumber
            ).subscribe((data: category_of_books[]) => {
              this.Category = data;
              this.Category2.push(data[0]);
              this.total();
            });
          }
        }
      });
    }
  }
  // cartDetails = new Cart(0, 0);
  // // cartsd: any;
  // deleteProducts(cartsd) {
  //   console.log(cartsd);
  //   this.cartDetails.userId = this.userId;
  //   this.cartDetails.SerialNumber = cartsd;
  //   this.carts.deleteProduct(cartsd).subscribe((data: any) => {
  //     // data[0].id;
  //     alert("you delete a product sucsseflly");
  //     this.Cart();
  //   });
  // }
}
