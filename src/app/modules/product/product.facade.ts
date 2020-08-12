import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { State } from './store/state';
import * as actions from './store/actions';
import { Product } from '../explore/explore.entities';
import { productSelector, uiSelector, transactionSelector } from './store/selectors';
import { CreateTransactionPayload, CreateTransactionResponse } from './product.entities';

@Injectable()
export class ProductFacade {

  constructor(
    private store: Store<State>
  ) {}

  public product$: Observable<Product> = this.store.pipe(
    select(productSelector)
  );

  public transaction$: Observable<CreateTransactionResponse> = this.store.pipe(
    select(transactionSelector)
  );

  public isLoadingProduct$: Observable<boolean> = this.store.pipe(
    select(uiSelector),
    map(ui => ui.isLoadingProduct)
  );

  public fetchProduct(productId: string): void {
    this.store.dispatch(actions.fetchProductAction({ payload: productId }));
  }

  public createTransaction(payload: CreateTransactionPayload): void {
    this.store.dispatch(actions.createTransactionAction({ payload }));
  }
}
