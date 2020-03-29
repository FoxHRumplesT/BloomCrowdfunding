import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@environment';
import { Product } from './explore.entities';

const api = {
  products: () => `${environment.api}/product`,
  searchProducts: (query: string) => `${environment.api}/product/find/${query}`
};

@Injectable()
export class ExploreServices {

  constructor(
    private http: HttpClient
  ) {}

  public fetchProducts(): Observable<{code: string, message: string, list: Product[] }> {
    return this.http.get<{code: string, message: string, list: Product[] }>(api.products());
  }

  public searchProducts(query: string): Observable<{code: string, message: string, list: Product[] }> {
    return this.http.get<{code: string, message: string, list: Product[] }>(api.searchProducts(query));
  }

}
