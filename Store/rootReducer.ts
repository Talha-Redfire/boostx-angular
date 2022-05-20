import { getCartListReducer } from './Cart/cartReducers';
import { fetchProductsReducer } from './FetchProducts/FetchproductReducer';
import { getproductsReducer } from './Products/products.reducer';

export const AppState = {
  productsList: getproductsReducer,
  Cart: getCartListReducer,
  fetchedProducts: fetchProductsReducer,
};
