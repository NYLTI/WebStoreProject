import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductPageComponent } from './components/product-page/product-page.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    {path: 'cart', component: CartComponent},
    {path: '', component: ProductPageComponent}
];

