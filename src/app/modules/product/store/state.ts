import { Product } from '../../explore/explore.entities';
import { CreateTransactionResponse } from '../product.entities';

export const productFeatureName = 'product';

export interface UIState {
  isLoadingProduct: boolean;
}

export interface DataState {
  product: Product;
  transaction: CreateTransactionResponse;
}
export interface State {
  ui: UIState;
  data: DataState;
}
