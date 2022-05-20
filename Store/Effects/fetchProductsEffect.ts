import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EmptyError, exhaustMap, map } from 'rxjs';
import { FetchProductsApiService } from 'src/app/services/fetch-products-api.service';
import { ProductsFetched } from 'Store/FetchProducts/FetchproductAactions';

import {
  getProductsAction,
  productsSuccess,
} from '../Products/product.actions';

@Injectable()
export class FetchProductsEffect {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProductsAction),
      exhaustMap(() =>
        this.productservice.getProducts().pipe(
          map((products) => ProductsFetched({ list: products.products })),
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
