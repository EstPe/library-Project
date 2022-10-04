import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, category_of_books } from '../categories.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private acRout: ActivatedRoute,
    private CategoriesService: CategoriesService
  ) {}

  list_of_category: category_of_books[] = [];
  currentCategorie = new category_of_books(0, '', 0, '', '', '');
  getProducts() {
    this.CategoriesService.getProducts().subscribe(
      (data: category_of_books[]) => {
        this.list_of_category = data;
        for (let Category of this.list_of_category) {
          if (this.CategoryId == Category.SerialNumber) {
            this.currentCategorie = Category;
          }
        }
      }
    );
  }
  CategoryId: number;

  ngOnInit(): void {
    this.CategoryId = this.acRout.snapshot.params['SerialNumber'];
    this.getProducts();
  }
}
