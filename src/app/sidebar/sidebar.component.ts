import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  //The_list = ["Science Fiction", "Thrillers", "Kids", "Cooking and Baking", "Romance"]
  constructor(private Categories: CategoriesService) { }

  ngOnInit(): void {

  }
  category: String = " ";

  showScience_Fiction() {
    this.category = "Science Fiction";
    // this.Categories.setCategories("Science Fiction")


  }

  showThrillers() {
    this.category = "Thrillers";
    // this.Categories.setCategories("Thrillers")

  }

  showKids() {
    this.category = "Kids";
    // this.Categories.setCategories("Kids")

  }

  showCooking_and_Baking() {
    this.category = "Cooking and Baking";
    // this.Categories.setCategories("Cooking and Baking")

  }
  showRomance() {
    this.category = "Romance";
    // this.Categories.setCategories("Romance")

  }




}
