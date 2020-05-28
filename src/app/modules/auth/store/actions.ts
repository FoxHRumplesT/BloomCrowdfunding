import { createAction, props } from '@ngrx/store';

import { User, CreateUserPayload } from '../auth.entities';

export const loginAction = createAction('[Auth] Login',
props<{ payload: { username: string, password: string }}>());
export const loginSuccessAction = createAction('[Auth] Login success',
props<{ response: User }>());
export const loginErrorAction = createAction('[Auth] Login error');

export const createUserAction = createAction('[Auth] Create user',
props<{ payload: CreateUserPayload}>());
export const createUserSuccessAction = createAction('[Auth] Create user success',
props<{ response: any }>());
