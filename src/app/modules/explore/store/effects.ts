import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import { fetchProductsAction, fetchProductsSuccessAction, searchProductsAction } from './actions';
import { ExploreServices } from '../explore.services';

@Injectable()
export class ExploreEffects {

  constructor(
    private actions$: Actions,
    private exploreServices: ExploreServices
  ) {}

  fetchProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fetchProductsAction),
    switchMap(action => this.exploreServices.fetchProducts().pipe(
      map(response => ({ response: response.list, error: null })),
      catchError(error => of({ error, response: [] }))
    )),
    map(({ response, error }) => fetchProductsSuccessAction({ response }))
  ));

  searchProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(searchProductsAction),
    switchMap(({ payload }) => this.exploreServices.searchProducts(payload).pipe(
      map(response => ({ response: response.list, error: null })),
      catchError(error => of({ error, response: [] }))
    )),
    map(({ response, error }) => fetchProductsSuccessAction({ response }))
  ));

}
