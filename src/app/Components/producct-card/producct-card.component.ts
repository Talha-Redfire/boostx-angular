import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddtoCartAction } from 'Store/Cart/cartActions';
import { AddTocartrquestAction } from 'Store/FetchProducts/FetchproductAactions';
import { FetchedProductsInterface } from 'Store/FetchProducts/FetchproductReducer';
import { ProductsInterface } from 'Store/Products/products.reducer';

@Component({
  selector: 'app-producct-card',
  templateUrl: './producct-card.component.html',
  styleUrls: ['./producct-card.component.scss'],
})
export class ProducctCardComponent implements OnInit {
  products$!: Observable<ProductsInterface>;
  Fethedproducts$!: Observable<FetchedProductsInterface>;
  constructor(
    private store: Store<{ productsList: ProductsInterface }>,
    private store2: Store<{ fetchedProducts: FetchedProductsInterface }>
  ) {}
  // addToCart(Item: any) {
  //   this.store.dispatch(AddtoCartAction({ product: Item }));
  // }

  addToCart(Item: any) {
    console.log(Item);
    this.store.dispatch(
      AddTocartrquestAction({
        product: {
          userId: 1,
          products: [
            {
              id: Item.id,
              quantity: 1,
            },
          ],
        },
      })
    );
  }

  ngOnInit(): void {
    this.products$ = this.store.select('productsList');
    this.Fethedproducts$ = this.store2.select('fetchedProducts');
  }
}
