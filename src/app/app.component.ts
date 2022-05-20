import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchProductsAction } from 'Store/FetchProducts/FetchproductAactions';
import { getProductsAction } from 'Store/Products/product.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bootsx';

  constructor(private store: Store) {}
  getAllproducts() {
    this.store.dispatch(getProductsAction());
    this.store.dispatch(fetchProductsAction());
  }
  ngOnInit(): void {
    this.getAllproducts();
  }
}
