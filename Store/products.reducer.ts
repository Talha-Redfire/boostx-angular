import { createReducer, on } from '@ngrx/store';
import { getProductsAction, productsSuccess } from './product.actions';
export interface ProductsInterface {
  products: any[];
  loading: boolean;
}
const initialState: ProductsInterface = {
  products: [],
  loading: false,
};
export const getproductsReducer = createReducer(
  initialState,
  on(getProductsAction, (state, action) => {
    return {
      ...state,
      products: [],
      loading: true,
    };
  }),
  on(productsSuccess, (state, action) => {
    console.log(action);
    return {
      ...state,
      products: [...action.list],
      loading: false,
    };
  })
);
