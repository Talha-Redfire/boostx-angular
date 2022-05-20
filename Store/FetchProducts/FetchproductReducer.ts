import { createReducer, on } from '@ngrx/store';
import { fetchProductsAction, ProductsFetched } from './FetchproductAactions';
export interface FetchedProductsInterface {
  productsFetched: any[];
  loading: boolean;
}
const initialState: FetchedProductsInterface = {
  productsFetched: [],
  loading: false,
};
export const fetchProductsReducer = createReducer(
  initialState,
  on(fetchProductsAction, (state) => {
    return {
      ...state,
      productsFetched: [],
      loading: true,
    };
  }),
  on(ProductsFetched, (state, action) => {
    console.log(action);
    return {
      ...state,
      productsFetched: [...action.list],
      loading: false,
    };
  })
);
