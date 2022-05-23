import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetCartTotalService } from 'src/app/services/get-cart-total.service';
import {
  DecreaseQuantityAction,
  IncreaseQuantityAction,
  RemovefromCartAction,
} from 'Store/Cart/cartActions';
import { CartItemsInterface } from 'Store/Cart/cartReducers';
import { FetchedProductsInterface } from 'Store/FetchProducts/FetchproductReducer';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
})
export class CartListComponent implements OnInit {
  CartItems$!: Observable<CartItemsInterface>;
  CartTotal: any;
  cartList$!: Observable<any>;
  constructor(
    private store: Store<{ Cart: CartItemsInterface }>,
    private store2: Store<{ fetchedProducts: FetchedProductsInterface }>,
    private totalService: GetCartTotalService
  ) {
    this.CartItems$ = this.store.select('Cart');
    this.cartList$ = this.store2.select('fetchedProducts');
  }
  removeCart(Item: Number) {
    this.store.dispatch(RemovefromCartAction({ id: Item }));
    this.CartTotal = this.totalService.cartTotal();
  }
  increaseQty(Item: Number, price: Number) {
    this.store.dispatch(IncreaseQuantityAction({ id: Item, price: price }));
    this.CartTotal = this.totalService.cartTotal();
  }

  decreaseQty(Item: Number, price: Number, quantity: Number) {
    this.store.dispatch(
      DecreaseQuantityAction({ id: Item, price: price, quantity: quantity })
    );
    this.CartTotal = this.totalService.cartTotal();
  }

  ngOnInit(): void {
    this.CartTotal = this.totalService.cartTotal();
  }
}
