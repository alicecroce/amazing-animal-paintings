import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';

const routes: Routes = [
  {path: '', redirectTo:'/products', pathMatch:'full'},//homepage
  {path:'products', component: ProductListComponent}//elenco prodotti (in realtà la home converge direttamente in questa)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
