import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { State } from './store/state';
import { fetchProductAction } from './store/actions';
import { Product } from '../explore/explore.entities';
import { productSelector, uiSelector } from './store/selectors';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductFacade {

  constructor(
    private store: Store<State>
  ) {}

  public product$: Observable<Product> = this.store.pipe(
    select(productSelector)
  );

  public isLoadingProduct$: Observable<boolean> = this.store.pipe(
    select(uiSelector),
    map(ui => ui.isLoadingProduct)
  );

  public fetchProduct(productId: string): void {
    this.store.dispatch(fetchProductAction({ payload: productId }));
  }
}
