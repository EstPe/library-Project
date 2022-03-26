import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @ViewChild(SidebarComponent) sidebarList: SidebarComponent;

  constructor() { }
  ngOnInit(): void {
    // this.sidebarList.category;
  }




}
