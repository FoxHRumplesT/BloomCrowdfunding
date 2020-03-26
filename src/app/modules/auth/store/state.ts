import { User } from '../auth.entities';

export const authFeatureName = 'auth';

export interface UIState {
  isLoadingLogin: boolean;
}

export interface DataState {
  user: User;
}
export interface State {
  ui: UIState;
  data: DataState;
}
