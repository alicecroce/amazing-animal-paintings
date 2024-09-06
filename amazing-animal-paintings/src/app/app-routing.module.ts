import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { CartViewComponent } from './cart/cart-view/cart-view.component';

const routes: Routes = [
  {path: '', redirectTo:'/products', pathMatch:'full'},//homepage
  {path:'products', component: ProductListComponent},//elenco prodotti (in realtà la home converge direttamente in questa)
  {path:'cart', component: CartViewComponent}//vista nel carrello (con o senza prodotti)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
