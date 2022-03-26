import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPreviewComponent } from './product-preview/product-preview.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'ProductPreview/:SerialNumber', component: ProductDetailsComponent
  },
  {
    path: 'products', component: ProductsComponent
  },
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'userInfo', component: UserInfoComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
