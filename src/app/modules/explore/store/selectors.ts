import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State, exploreFeatureName } from './state';

const exploreStateSelector = createFeatureSelector<State>(exploreFeatureName);

export const uiSelector = createSelector(exploreStateSelector, state => state.ui);
export const productsSelector = createSelector(exploreStateSelector, state => state.data.products);
