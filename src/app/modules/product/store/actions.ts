import { createAction, props } from '@ngrx/store';

import { Product } from '../../explore/explore.entities';
import { CreateTransactionPayload, CreateTransactionResponse } from '../product.entities';

export const fetchProductAction = createAction('[Product] Fetch product',
  props<{ payload: string }>()
);
export const fetchProductSuccessAction = createAction('[Product] Fetch product success',
  props<{ response: Product }>()
);
export const createTransactionAction = createAction('[Product] Create transaction',
  props<{ payload: CreateTransactionPayload }>()
);
export const createTransactionSuccessAction = createAction('[Product] Create transaction success',
  props<{ response: CreateTransactionResponse }>()
);

