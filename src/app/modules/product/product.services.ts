import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment';
import { Product } from '../explore/explore.entities';

const api = {
  product: (productId: string) => `${environment.api}/product/${productId}`
};

@Injectable()
export class ProductServices {

  constructor(
    private http: HttpClient
  ) {}

  public fetchProduct(productId: string): Observable<{ code: string, message: string, data: Product }> {
    return this.http.get<{ code: string, message: string, data: Product }>(api.product(productId));
  }

}
