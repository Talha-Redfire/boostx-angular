import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddtoCartAction } from 'Store/Cart/cartActions';
import { ProductsInterface } from 'Store/Products/products.reducer';

@Component({
  selector: 'app-producct-card',
  templateUrl: './producct-card.component.html',
  styleUrls: ['./producct-card.component.scss'],
})
export class ProducctCardComponent implements OnInit {
  products$!: Observable<ProductsInterface>;
  constructor(private store: Store<{ productsList: ProductsInterface }>) {}
  addToCart(Item: any) {
    this.store.dispatch(AddtoCartAction({ product: Item }));
  }
  ngOnInit(): void {
    this.products$ = this.store.select('productsList');
  }
}
