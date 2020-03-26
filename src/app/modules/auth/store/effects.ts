import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { loginAction, loginSuccessAction, createUserAction, createUserSuccessAction } from './actions';
import { AuthServices } from '../auth.services';

@Injectable()
export class AuthEffects {

  constructor(
    private actions$: Actions,
    private authServices: AuthServices
  ) {}

  login$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(loginAction),
    switchMap(({ payload }) => this.authServices.login(payload.username, payload.password).pipe(
      map(response => ({ response, error: null })),
      catchError(error => of({ error, response: null }))
    )),
    tap(({ response, error }) => {
      if (!error && !!response) {}
    }),
    map(_ => loginSuccessAction(null))
  ));

  createUser$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(createUserAction),
    switchMap(({ payload }) => this.authServices.createUser(payload).pipe(
      map(response => ({ response, error: null })),
      catchError(error => of({ error, response: null }))
    )),
    map(({ response, error }) => createUserSuccessAction(null))
  ));

}
