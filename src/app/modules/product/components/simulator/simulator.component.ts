import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../explore/explore.entities';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.sass']
})
export class SimulatorComponent {

  @Input() product: Product;
  public form: FormGroup;

  constructor() {
    const { required } = Validators;
    this.form = new FormGroup({
      value: new FormControl('', [required])
    });
  }

  get value(): number {
    return +this.form.value.value.split(',').join('').replace('$', '');
  }

  get calculatedAmount(): number {
    const months = 3;
    return months * this.calculatedFees;
  }

  get calculatedFees(): number {
    const months = 3;
    const interest = 0.24;
    const pow = Math.pow(( 1 + interest), (1 / 12));
    const x = (this.value * (pow - 1)) / (1 - Math.pow((1 + (pow - 1)), (-(months))));
    return x;
  }

}
