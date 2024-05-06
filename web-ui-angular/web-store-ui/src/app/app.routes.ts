import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductCardComponent } from './components/product-card/product-card.component';



export const routes: Routes = [
    { path: 'login', component: LoginComponent},
    {path: 'cart', component: CartComponent},
    {path: '', component:ProductCardComponent}
];

