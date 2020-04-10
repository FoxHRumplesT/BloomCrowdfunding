import { createReducer, on, combineReducers } from '@ngrx/store';

import { DataState, UIState } from './state';
import * as actions from './actions';

const initialUiState: UIState = {
  isLoadingProduct: true
} as UIState;

const ui = createReducer(
  initialUiState,
  on(actions.fetchProductAction, (state, payload) => ({ ...state, isLoadingProduct: true })),
  on(actions.fetchProductSuccessAction, (state, payload) => ({ ...state, isLoadingProduct: false })),
);

const initialDataState: DataState = {} as DataState;

const data = createReducer(
  initialDataState,
  on(actions.fetchProductSuccessAction, (state, { response }) => ({ ...state, product: response })),
);

export const productReducers = combineReducers({
  ui,
  data
});
