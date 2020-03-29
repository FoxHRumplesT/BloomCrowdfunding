import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Product } from '../../explore.entities';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCardComponent {

  @Input() product: Product;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  get image(): SafeUrl {
    return !!this.product && this.sanitizer.bypassSecurityTrustUrl(`data:image/jpg;base64,${this.product.portrait.value}`);
  }

  get investmentDescription(): string {
    return !!this.product &&
      this.product.investmentDescription
        .replace('$###AMOUNT_REQUERID_MAX###', this.product.amountRequeredMax.toString())
        .replace('###PRODUCTION_QUANTITY_MIN###', this.product.productionQuantityMin.toString());
  }

  get percentage(): string {
    return !! this.product && `${((this.product.amountReceived * 100) / this.product.amountRequeredMin).toFixed()}%`;
  }

}
