import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PanierComponent} from "./panier/panier.component";
import {ProductComponent} from "./product/product.component";

const ROUTES: Routes =
  [
    {path: '', component: PanierComponent},
    {path: 'product', component: ProductComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
