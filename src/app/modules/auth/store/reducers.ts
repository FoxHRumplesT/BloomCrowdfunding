import { createReducer, on, combineReducers } from '@ngrx/store';

import { DataState, UIState } from './state';
import * as actions from './actions';

const initialUiState: UIState = {
  isLoadingLogin: false
} as UIState;

const ui = createReducer(
  initialUiState,
  on(actions.loginAction, (state, payload) => ({ ...state, isLoadingLogin: true })),
  on(actions.loginSuccessAction, (state, payload) => ({ ...state, isLoadingLogin: false }))
);

const initialDataState: DataState = {
  user: null
} as DataState;

const data = createReducer(
  initialDataState,
  on(actions.loginSuccessAction, (state, { response }) => ({ ...state, user: response }))
);

export const authReducers = combineReducers({
  ui,
  data
});
