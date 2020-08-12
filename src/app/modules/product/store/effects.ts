import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { ProductServices } from '../product.services';
import * as actions from './actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productServices: ProductServices
  ) { }

  fetchProduct$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.fetchProductAction),
    switchMap(({ payload }) => this.productServices.fetchProduct$(payload).pipe(
      map(response => ({ response: response.data, error: null })),
      catchError(error => of({ error, response: null }))
    )),
    map(({ response, error }) => actions.fetchProductSuccessAction({ response }))
  ));

  createTransaction$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(actions.createTransactionAction),
    switchMap(({ payload }) => this.productServices.createTransaction$(payload).pipe(
      map(response => ({ response, error: null })),
      catchError(error => of({ error, response: null }))
    )),
    map(({ response, error }) => actions.createTransactionSuccessAction({ response }))
  ));

}
