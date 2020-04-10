import { Product } from '../../explore/explore.entities';

export const productFeatureName = 'product';

export interface UIState {
  isLoadingProduct: boolean;
}

export interface DataState {
  product: Product;
}
export interface State {
  ui: UIState;
  data: DataState;
}
