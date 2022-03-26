import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  /*getUsers(){
    return[
      new User("esterpe","ester398@gmail.com","12345678"),
      new User("ester","ert45","451237"),
    ];
  }*/
  // list: any = []
  // setUser(getInfo) {
  //   for (let i of getInfo) {
  //     this.list = [i];
  //     console.log(i)
  //     return [
  //       new User(i.name, i.email, i.password, i.Phone),
  //     ];
  //   }


  // }
  // getTheUser() {
  //   return this.list;
  // }
  baseURL: string = "http://localhost:3000/";
  headers = { 'content-type': 'application/json' };

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.baseURL + 'user');
  }
  addUser(user: User): Observable<any> {
    let body = JSON.stringify(user);
    return this.http.post(this.baseURL + 'user', body, {
      headers: this.headers,
    });

  }
  // updateProducts(user: User): Observable<any> {
  //   let body = JSON.stringify(user);
  //   return this.http.put(this.baseURL + 'user/' + user.id, body,
  //     { headers: this.headers });


  // }

  // deleteProduct(user: User): Observable<any> {
  //   return this.http.delete(this.baseURL + 'user/' + user.id);
  // }
  userId: number;
  setUserConected(userId: number) {
    return this.userId = userId;
  }
  returnUserConected() {
    return this.userId;
  }

}


export class User {
  id: number;
  name: string;
  email: string;
  password: number;
  phone: string;
  image: string;

  constructor(id: number, name: string, email: string, password: number, phone: string, image: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.image = image;
  }
}
