import { createAction, props } from '@ngrx/store';

import { Product } from '../explore.entities';

export const fetchProductsAction = createAction('[Explore] Fetch products');
export const fetchProductsSuccessAction = createAction('[Explore] Fetch products success',
props<{ response: Product[] }>());

export const searchProductsAction = createAction('[Explore] Search products',
props<{ payload: string }>());
export const searchProductsSuccessAction = createAction('[Explore] Search products success',
props<{ response: Product[] }>());
