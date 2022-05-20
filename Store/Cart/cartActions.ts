import { createAction, props } from '@ngrx/store';

export const AddtoCartAction = createAction('[Add] Cart', props<any>());
export const RemovefromCartAction = createAction('[Remove] Cart', props<any>());

export const IncreaseQuantityAction = createAction(
  '[increase ] quantity',
  props<any>()
);

export const DecreaseQuantityAction = createAction(
  '[decrease ] quantity',
  props<any>()
);
