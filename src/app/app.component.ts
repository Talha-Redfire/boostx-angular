import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
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
  }
  ngOnInit(): void {
    this.getAllproducts();
  }
}
