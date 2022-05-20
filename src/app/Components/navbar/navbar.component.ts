import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartItemsInterface } from 'Store/Cart/cartReducers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  CartItems$!: Observable<CartItemsInterface>;
  constructor(private store: Store<{ Cart: CartItemsInterface }>) {}
  ngOnInit(): void {
    this.CartItems$ = this.store.select('Cart');
  }
}
