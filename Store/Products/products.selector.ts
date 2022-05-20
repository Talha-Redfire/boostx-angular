import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductsInterface } from './products.reducer';
const getproductsState = createFeatureSelector<{ productsList: any }>(
  'productsList'
);

export const getproducts = createSelector(getproductsState, (state) => {
  return state.productsList;
});
