import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment';
import { Product } from '../explore/explore.entities';
import { CreateTransactionPayload } from './product.entities';

const api = {
  product: (productId: string) => `${environment.api}/product/${productId}`,
  createTransaction: () => `${environment.server}/investment/v1/create-transaction-payment-gateway`
};

@Injectable()
export class ProductServices {

  constructor(
    private http: HttpClient
  ) {}

  public fetchProduct$(productId: string): Observable<{ code: string, message: string, data: Product }> {
    return this.http.get<{ code: string, message: string, data: Product }>(api.product(productId));
  }

  public createTransaction$(payload: CreateTransactionPayload): Observable<any> {
    return this.http.post(api.createTransaction(), { ...payload, vads_return_mode: 'GET' });
  }

}
