import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { State } from './store/state';
import { loginAction, createUserAction } from './store/actions';
import { CreateUserPayload } from './auth.entities';

@Injectable()
export class AuthFacade {

  constructor(
    private store: Store<State>
  ) {}

  public login(username: string, password: string): void {
    this.store.dispatch(loginAction({ payload: { username, password }}));
  }

  public createUser(payload: CreateUserPayload): void {
    this.store.dispatch(createUserAction({ payload }));
  }
}
