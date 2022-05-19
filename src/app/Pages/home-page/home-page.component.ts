import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsApiService } from 'src/app/services/product.service';
import { getProductsAction } from 'Store/product.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private store: Store, private getProducts: ProductsApiService) {}
  getAllproducts() {
    this.store.dispatch(getProductsAction());
  }
  ngOnInit(): void {
    // this.getAllproducts();
  }
}
