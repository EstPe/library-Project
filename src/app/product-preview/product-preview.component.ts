import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cart, CartsService } from '../carts.service';
import { CategoriesService, category_of_books } from '../categories.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css'],
})
export class ProductPreviewComponent implements OnInit {
  @Input() category: string = '';

  lists = [];
  new = [];
  cart_list = [];
  list2 = [];

  constructor(
    private CategoriesService: CategoriesService,
    private cart: CartsService,
    private acRout: ActivatedRoute,
    private user: UserService
  ) {}
  click: boolean = false;
  open() {
    this.click = true;
  }
  close() {
    this.click = false;
  }
  onClick2(form) {
    this.cart.setCart(form);
  }
  userId: number;
  ngOnInit(): void {
    // this.lists = this.CategoriesService.getlist_of_category_books();
    // this.list2 = this.cart.getCart_info()
    // this.getProducts();
    this.userId = this.user.returnUserConected();
    this.CategoriesThrillers();
    this.CategoriesCookingAndBaking();
    this.CategoriesScienceFiction();
    this.CategoriesRomance();
    this.CategoriesKids();
  }
  cartDetails = new Cart(0, 0);
  onClick(form) {
    console.log(this.userId);
    this.cartDetails.userId = this.userId;
    this.cartDetails.SerialNumber = form.SerialNumber;
    this.cart
      .addProduct(this.cartDetails)
      .subscribe((data: category_of_books) => {
        alert('you add a proudct sucsseflly');
        // this.UserServic.setUserConected(data.id)
      });
  }

  ThrillersCat: category_of_books[] = [];
  ScienceFictionCat: category_of_books[] = [];
  KidsCategory: category_of_books[] = [];
  RomanceCategory: category_of_books[] = [];
  CookingAndBakingCat: category_of_books[] = [];
  CategoriesThrillers() {
    this.CategoriesService.getCategoriesThrillers().subscribe((data) => {
      this.ThrillersCat = data;
    });
  }
  CategoriesScienceFiction() {
    this.CategoriesService.getCategoriesScienceFiction().subscribe((data) => {
      this.ScienceFictionCat = data;
    });
  }
  CategoriesKids() {
    this.CategoriesService.getCategoriesKids().subscribe((data) => {
      this.KidsCategory = data;
    });
  }
  CategoriesRomance() {
    this.CategoriesService.getCategoriesRomance().subscribe((data) => {
      this.RomanceCategory = data;
    });
  }
  CategoriesCookingAndBaking() {
    this.CategoriesService.getCategoriesCookingAndBaking().subscribe((data) => {
      this.CookingAndBakingCat = data;
    });
  }

  SerchCategories(Category: string) {
    switch (Category) {
      case 'Thrillers':
        return this.ThrillersCat;
      case 'Science Fiction':
        return this.ScienceFictionCat;
      case 'Kids':
        return this.KidsCategory;
      case 'Romance':
        return this.RomanceCategory;
      case 'Cooking and Baking':
        return this.CookingAndBakingCat;
      default:
        //console.log("does not work")
        return false;
    }
  }
}
