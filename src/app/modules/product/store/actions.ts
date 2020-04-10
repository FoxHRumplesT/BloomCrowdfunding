import { createAction, props } from '@ngrx/store';

import { Product } from '../../explore/explore.entities';

export const fetchProductAction = createAction('[Product] Fetch product',
props<{ payload: string }>());
export const fetchProductSuccessAction = createAction('[Product] Fetch product success',
props<{ response: Product }>());
