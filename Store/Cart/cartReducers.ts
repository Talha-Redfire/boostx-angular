import { createReducer, on } from '@ngrx/store';
import { NotificationService } from 'src/app/services/alerts-service.service';
import {
  AddtoCartAction,
  DecreaseQuantityAction,
  IncreaseQuantityAction,
  RemovefromCartAction,
} from './cartActions';
export interface CartItemsInterface {
  cartList: any[];
  loading: boolean;
}
const initialState: CartItemsInterface = {
  cartList: [],
  loading: false,
};
export const getCartListReducer = createReducer(
  initialState,
  on(AddtoCartAction, (state, action) => {
    const ExistingCart = state.cartList.find((c) => c.id === action.product.id);

    if (ExistingCart !== undefined) {
      //   alert('Product Already Exists');
      return {
        ...state,
        cartList: [...state.cartList],
        loading: false,
      };
    } else {
      const sum = state.cartList.reduce((sum, totatl) => {
        const updatedSum = sum + totatl.total;
        return updatedSum;
      }, 0);
      console.log(sum);

      const product = { ...action.product };
      product.qty = 1;
      product.total = product.price;
      return {
        ...state,
        cartList: [...state.cartList, product],
        loading: false,
      };
    }
  }),

  on(RemovefromCartAction, (state, action) => {
    console.log(action);
    return {
      ...state,
      cartList: state.cartList.filter((item) => item.id !== action.id),
      loading: false,
    };
  }),
  on(IncreaseQuantityAction, (state, action) => {
    const ExistingCart = state.cartList.find((c) => c.id === action.id);
    const ExistingCartIndex = state.cartList.indexOf(ExistingCart);
    const newProducts = state.cartList.map((product, index) => {
      const newProduct = { ...product };
      if (index === ExistingCartIndex) {
        newProduct.qty = state.cartList[index].qty + 1;
        newProduct.total = state.cartList[index].total + action.price;
      }
      return newProduct;
    });
    return {
      ...state,
      cartList: newProducts,
      loading: false,
    };
  }),
  on(DecreaseQuantityAction, (state, action) => {
    if (action.quantity <= 1) {
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.id),
        loading: false,
      };
    } else {
      const ExistingCart = state.cartList.find((c) => c.id === action.id);
      const ExistingCartIndex = state.cartList.indexOf(ExistingCart);
      const newProducts = state.cartList.map((product, index) => {
        const newProduct = { ...product };
        if (index === ExistingCartIndex) {
          newProduct.qty = state.cartList[index].qty - 1;
          newProduct.total = state.cartList[index].total - action.price;
        }
        return newProduct;
      });
      return {
        ...state,
        cartList: newProducts,
        loading: false,
      };
    }
  })
);
