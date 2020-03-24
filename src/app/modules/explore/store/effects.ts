import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';

import { fetchProductsAction } from './actions';
import { ExploreServices } from '../explore.services';
import { Injectable } from '@angular/core';

@Injectable()
export class ExploreEffects {

  constructor(
    private actions$: Actions,
    private exploreServices: ExploreServices
  ) {}

  fetchProducts$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(fetchProductsAction),
    switchMap(action => this.exploreServices.fetchProducts())
  ));

}
