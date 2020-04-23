import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from './modules/auth/auth.entities';
import { userSelector } from './modules/auth/store/selectors';

@Injectable()
export class AppFacade {
  constructor(
    private store: Store
  ) {}

  public user$: Observable<User> = this.store.pipe(
    select(userSelector)
  );
}
