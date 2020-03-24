import { createReducer, on, combineReducers } from '@ngrx/store';

import { DataState, UIState } from './state';
import * as actions from './actions';

const initialUiState: UIState = {} as UIState;

const ui = createReducer(
  initialUiState,
  on(actions.fetchProductsAction, (state, payload) => ({ ...state, products: payload }))
);

const initialDataState: DataState = {} as DataState;

const data = createReducer(
  initialDataState,
  on(actions.fetchProductsSuccessAction, (state, payload) => ({ ...state, products: payload }))
);

export const exploreReducers = combineReducers({
  ui,
  data
});
