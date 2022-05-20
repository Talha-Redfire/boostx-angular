import { createAction, props } from '@ngrx/store';

export const getProductsAction = createAction('[products] get products');
export const productsSuccess = createAction(
  '[products] products success',
  props<any>()
);
