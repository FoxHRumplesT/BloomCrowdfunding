import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Product } from '../../../explore/explore.entities';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.sass']
})
export class SimulatorComponent {

  @Input() product: Product;
  public form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    const { required } = Validators;
    this.form = new FormGroup({
      value: new FormControl('20000', [required])
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

  public onSubmit(): void {
    this.router.navigate(['pay', this.value], { relativeTo: this.route });
  }

}
