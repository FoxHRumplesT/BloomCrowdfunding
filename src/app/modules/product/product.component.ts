import { SafeUrl, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Product } from '../explore/explore.entities';
import { ProductFacade } from './product.facade';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  public showSimulator = false;

  constructor(
    private productFacade: ProductFacade,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const { productId } = this.route.snapshot.params;
    this.productFacade.fetchProduct(productId);
  }

  get product$(): Observable<Product> {
    return this.productFacade.product$;
  }

  get isLoadingProduct$(): Observable<boolean> {
    return this.productFacade.isLoadingProduct$;
  }

  get image$(): Observable<SafeUrl> {
    return this.product$.pipe(
      map(product => !!product && this.sanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64,${product.portrait.value}`))
    );
  }

  public toggleShowSimulator(): void {
    this.showSimulator = !this.showSimulator;
  }

}
