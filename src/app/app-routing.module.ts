import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './Components/cart-list/cart-list.component';
import { AboutComponent } from './Pages/about/about.component';
import { AllproductsComponent } from './Pages/allproducts/allproducts.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: AllproductsComponent,
  },
  { path: 'cart', component: CartListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
