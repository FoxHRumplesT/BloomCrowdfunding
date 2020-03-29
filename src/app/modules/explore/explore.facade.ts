import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { fetchProductsAction, searchProductsAction } from './store/actions';
import { Product } from './explore.entities';
import { productsSelector, uiSelector } from './store/selectors';
import { map } from 'rxjs/operators';

@Injectable()
export class ExploreFacade {

  constructor(
    private store: Store
  ) {}

  public products$: Observable<Product[]> = this.store.pipe(
    select(productsSelector)
  );

  public isLoadingProducts$: Observable<boolean> = this.store.pipe(
    select(uiSelector), map(state => state.isLoadingProducts)
  );

  public hasProducts$: Observable<boolean> = this.store.pipe(
    select(uiSelector), map(state => state.hasProducts)
  );

  public fetchProducts(): void {
    this.store.dispatch(fetchProductsAction());
  }

  public searchProducts(query: string): void {
    this.store.dispatch(searchProductsAction({ payload: query }));
  }
}
