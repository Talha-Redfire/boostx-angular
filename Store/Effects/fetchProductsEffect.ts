import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EmptyError, exhaustMap, map, mergeMap } from 'rxjs';
import { FetchProductsApiService } from 'src/app/services/fetch-products-api.service';
import {
  ProductsFetched,
  fetchProductsAction,
  getCartListRequest,
  getCartListSuccess,
  AddTocartrquestAction,
  addToCartSuccessAction,
} from 'Store/FetchProducts/FetchproductAactions';
@Injectable()
export class FetchProductsEffect {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(fetchProductsAction),
      exhaustMap(() =>
        this.productservice.getProducts().pipe(
          map((products) => ProductsFetched({ list: products.products })),
          catchError(() => 'error loading products')
        )
      )
    )
  );

  getCartList$ = createEffect(() =>
    this.action$.pipe(
      ofType(getCartListRequest),
      exhaustMap(() =>
        this.productservice.getCartList().pipe(
          map((products) => getCartListSuccess({ list: products.carts })),
          catchError(() => 'error loading products')
        )
      )
    )
  );

  addToCart$ = createEffect(() =>
    this.action$.pipe(
      ofType(AddTocartrquestAction),
      mergeMap((action) =>
        this.productservice.addToCart(action).pipe(
          map((products) => addToCartSuccessAction({ list: products })),
          catchError(() => 'error loading products')
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private productservice: FetchProductsApiService
  ) {}
}
