import { Component, Input } from '@angular/core';

import { Product } from '../../../explore/explore.entities';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.sass']
})
export class ValuesComponent {

  @Input() product: Product;

}
