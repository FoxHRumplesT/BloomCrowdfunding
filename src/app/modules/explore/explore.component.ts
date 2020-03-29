import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { ExploreFacade } from './explore.facade';
import { Product } from './explore.entities';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.sass']
})
export class ExploreComponent implements OnInit , OnDestroy {

  private navigationSubscription: Subscription;

  constructor(
    private exploreFacade: ExploreFacade,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.navigationSubscription = this.route.queryParams.subscribe(({ product }) => {
      if (!!product) this.exploreFacade.searchProducts(product);
      else this.exploreFacade.fetchProducts();
    });
  }

  ngOnDestroy(): void {
    this.navigationSubscription.unsubscribe();
  }

  get products$(): Observable<Product[]> {
    return this.exploreFacade.products$;
  }

  get isLoadingProducts$(): Observable<boolean> {
    return this.exploreFacade.isLoadingProducts$;
  }

  get hasProducts$(): Observable<boolean> {
    return this.exploreFacade.hasProducts$;
  }

  public navigateToSearchProducts(query: string): void {
    if (!!query) this.router.navigate(['/explore'], { queryParams: { product: query }});
    else this.router.navigate(['/explore']);
  }
}
