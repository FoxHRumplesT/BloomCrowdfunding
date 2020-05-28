import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('login')) {
      const headers = request.headers
        .append('Authorization', `Basic ${btoa(request.params.get('username') + ':' + request.params.get('password'))}`);
      request = request.clone({ headers, params: null });
    }
    return next.handle(request);
  }

}
