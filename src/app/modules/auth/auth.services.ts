import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User, CreateUserPayload } from './auth.entities';
import { environment } from '@environment';
import { map } from 'rxjs/operators';

const api = {
  login: () => `${environment.server}/auth/login`,
  createUser: () => `${environment.api}/user`,
};

@Injectable()
export class AuthServices {

  constructor(
    private http: HttpClient
  ) {}

  public login(username: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(username + ':' + password)}`
    });
    return this.http.post<any>(api.login(), null, { headers });
  }

  public createUser(payload: CreateUserPayload): Observable<any> {
    return this.http.post<any>(api.createUser(), payload);
  }
}
