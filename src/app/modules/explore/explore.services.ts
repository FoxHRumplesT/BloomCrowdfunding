import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment';

const api = {
  products: () => `${environment.api}/product`
};

@Injectable()
export class ExploreServices {

  constructor(
    private http: HttpClient
  ) {}

  public fetchProducts(): Observable<any> {
    return this.http.get<any>(api.products());
  }

}
