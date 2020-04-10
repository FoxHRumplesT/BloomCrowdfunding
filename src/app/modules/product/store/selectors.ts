import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, productFeatureName } from './state';

const productStateSelector = createFeatureSelector<State>(productFeatureName);

export const uiSelector = createSelector(productStateSelector, state => state.ui);
export const productSelector = createSelector(productStateSelector, state => state.data.product);
