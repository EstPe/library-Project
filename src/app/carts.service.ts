import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  constructor(private http: HttpClient) { }
  baseURL: string = "http://localhost:3000/";
  headers = { 'content-type': 'application/json' };
  getProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'cart');
  }
  addProduct(cart: Cart): Observable<any> {
    let body = JSON.stringify(cart);
    return this.http.post(this.baseURL + 'cart', body, {
      headers: this.headers,
    });

  }
  // deleteProduct(deleteProduct: any): Observable<any> {
  //   return this.http.delete(this.baseURL + 'cart/' + deleteProduct);
  // }


  //סמסטר א'
  list_cart: any = []
  sum: number = 0;
  setCart(counter) {
    this.list_cart.push(counter);
    console.log(counter)
  }


  getCart_info() {
    console.log(this.list_cart)
    return this.list_cart;
  }

}




export class Cart {
  userId: number;
  SerialNumber: number;
  id: any;

  constructor(userId: number, SerialNumber: number) {
    this.userId = userId;
    this.SerialNumber = SerialNumber;
  }
}


