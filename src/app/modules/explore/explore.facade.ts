import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { fetchProductsAction } from './store/actions';

@Injectable()
export class ExploreFacade {

  constructor(
    private store: Store
  ) {}

  public fetchProducts(): void {
    this.store.dispatch(fetchProductsAction());
  }
}
