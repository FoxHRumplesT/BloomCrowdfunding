import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../explore/explore.entities';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.sass']
})
export class SimulatorComponent {

  @Input() show: boolean;
  @Input() product: Product;
  @Output() toggle: EventEmitter<void> = new EventEmitter();
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
    return this.value * 2;
  }

  get calculatedFees(): number {
    return this.value * 3;
  }

}
