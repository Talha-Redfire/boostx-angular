import { createAction, props } from '@ngrx/store';

export const fetchProductsAction = createAction('[fetch] products');
export const ProductsFetched = createAction(
  '[products]  fetched',
  props<any>()
);

export const AddTocartrquestAction = createAction(
  '[addtocart] rquest',
  props<any>()
);
export const addToCartSuccessAction = createAction(
  '[addtocart] success',
  props<any>()
);
export const getCartListRequest = createAction('[cartList] Request');
export const getCartListSuccess = createAction(
  '[cartList] success',
  props<any>()
);
