import { createReducer, on, combineReducers } from '@ngrx/store';

import { DataState, UIState } from './state';
import * as actions from './actions';

const initialUiState: UIState = {
  isLoadingProducts: true,
  hasProducts: true
} as UIState;

const ui = createReducer(
  initialUiState,
  on(actions.fetchProductsAction, (state, payload) => ({ ...state, isLoadingProducts: true, hasProducts: true })),
  on(actions.fetchProductsSuccessAction, (state, { response }) =>
    ({ ...state, isLoadingProducts: false, hasProducts: !!response && !!response.length })
  ),
  on(actions.searchProductsAction, (state, payload) => ({ ...state, isLoadingProducts: true, hasProducts: true })),
  on(actions.searchProductsSuccessAction, (state, { response }) =>
    ({ ...state, isLoadingProducts: false, hasProducts: !!response && !!response.length })
  )
);

const initialDataState: DataState = {} as DataState;

const data = createReducer(
  initialDataState,
  on(actions.fetchProductsSuccessAction, (state, { response }) => ({ ...state, products: response })),
  on(actions.searchProductsSuccessAction, (state, { response }) => ({ ...state, products: response }))
);

export const exploreReducers = combineReducers({
  ui,
  data
});
