import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, authFeatureName } from './state';

const authStateSelector = createFeatureSelector<State>(authFeatureName);

export const uiSelector = createSelector(authStateSelector, state => state.ui);
export const userSelector = createSelector(authStateSelector, state => state.data.user);
