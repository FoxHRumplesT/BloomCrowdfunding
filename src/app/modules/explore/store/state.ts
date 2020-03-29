import { Product } from '../explore.entities';

export const exploreFeatureName = 'explore';

export interface UIState {
  isLoadingProducts: boolean;
  hasProducts: boolean;
}

export interface DataState {
  products: Product[];
}
export interface State {
  ui: UIState;
  data: DataState;
}
