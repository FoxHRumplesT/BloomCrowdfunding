import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { ProductServices } from '../product.services';
import { fetchProductAction, fetchProductSuccessAction } from './actions';

@Injectable()
export class ProductEffects {

  constructor(
    private actions$: Actions,
    private productServices: ProductServices
  ) {}

  fetchProduct$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fetchProductAction),
    switchMap(({ payload }) => this.productServices.fetchProduct(payload).pipe(
      map(response => ({ response: response.data, error: null })),
      catchError(error => of({ error, response: null }))
    )),
    map(({ response, error }) => fetchProductSuccessAction({ response }))
  ));

}
