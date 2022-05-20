import { createAction, props } from '@ngrx/store';

export const fetchProductsAction = createAction('[fetch] products');
export const ProductsFetched = createAction(
  '[products]  fetched',
  props<any>()
);
