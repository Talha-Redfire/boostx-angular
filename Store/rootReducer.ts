import { getCartListReducer } from './Cart/cartReducers';
import { getproductsReducer } from './Products/products.reducer';

export const AppState = {
  productsList: getproductsReducer,
  Cart: getCartListReducer,
};
