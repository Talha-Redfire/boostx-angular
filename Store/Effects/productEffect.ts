import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EmptyError, exhaustMap, map } from 'rxjs';
import { ProductsApiService } from 'src/app/services/product.service';
import { getProductsAction, productsSuccess } from '../Products/product.actions';

@Injectable()
export class ProductEffect {
  loadProducts$ = createEffect(() =>
    this.action$.pipe(
      ofType(getProductsAction),
      exhaustMap(() =>
        this.productservice.getProducts().pipe(
          map((products) => productsSuccess({ list: products })),
          catchError(() => 'error loading products')
        )
      )
    )
  );
  constructor(
    private action$: Actions,
    private productservice: ProductsApiService
  ) {}
}
