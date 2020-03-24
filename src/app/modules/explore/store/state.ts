export const exploreFeatureName = 'explore';

export interface UIState {
  isLoadingProjects: boolean;
}

export interface DataState {
  products: any;
}
export interface State {
  ui: UIState;
  data: DataState;
}
