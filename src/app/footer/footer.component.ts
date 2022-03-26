import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  NameStore:String='B-store';
  address:String='Sesame Street, Haifa';
  tel:String='1-800-400-400';

  ngOnInit(): void {
  }

}
