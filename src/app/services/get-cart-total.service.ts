import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemsInterface } from 'Store/Cart/cartReducers';

@Injectable({
  providedIn: 'root',
})
export class GetCartTotalService {
  CartItems$!: Observable<CartItemsInterface>;
  totatl: any;
  constructor(private store: Store<{ Cart: CartItemsInterface }>) {
    this.CartItems$ = this.store.select('Cart');
  }

  cartTotal() {
    const items = this.CartItems$.subscribe(
      (event) =>
        (this.totatl = event.cartList
          .reduce((sum, totatl) => {
            const updatedSum = sum + totatl.total;
            return updatedSum;
          }, 0)
          .toFixed(1))
    );
    return this.totatl;
  }
}
