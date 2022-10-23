import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  email1:any ='Shanitkip12@gmail.com';
  profession1:String = 'Practical Engineer';
  name1:String ='Shanit Kiperman';
  id:number=307951194;

  email2:any ='ester398@gmail.com';
  profession2:String = 'Practical Engineer';
  name2:String ='Ester Peretz';
  id2:number=318739117;
  constructor() { }

  ngOnInit(): void {
  }

}
