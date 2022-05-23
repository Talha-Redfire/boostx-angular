import { createReducer, on } from '@ngrx/store';
import {
  AddTocartrquestAction,
  addToCartSuccessAction,
  fetchProductsAction,
  getCartListRequest,
  getCartListSuccess,
  ProductsFetched,
} from './FetchproductAactions';
export interface FetchedProductsInterface {
  productsFetched: any[];
  loading: boolean;
  getCartList: any[];
}
const initialState: FetchedProductsInterface = {
  productsFetched: [],
  loading: false,
  getCartList: [],
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
  }),

  on(AddTocartrquestAction, (state, action) => {
    return {
      ...state,
      loading: true,
    };
  }),

  on(addToCartSuccessAction, (state, action) => {
    console.log(action);
    return {
      ...state,
      loading: false,
      getCartList: [...state.getCartList, action.list],
    };
  }),
  on(getCartListRequest, (state, action) => {
    console.log(action);
    return {
      ...state,
      getCartList: [],
      loading: true,
    };
  }),
  on(getCartListSuccess, (state, action) => {
    return {
      ...state,
      getCartList: [...action.list],
      loading: false,
    };
  })
);
