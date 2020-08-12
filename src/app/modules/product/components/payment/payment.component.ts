import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ProductFacade } from '../../product.facade';
import { Observable } from 'rxjs';
import { CreateTransactionResponse } from '../../product.entities';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.sass']
})
export class PaymentComponent {

  @ViewChild('formButton', { static: false }) formButton: ElementRef;

  public form: FormGroup;
  public documentTypes = [
    {
      name: 'Cedula',
      value: 1
    },
    {
      name: 'pasaporte',
      value: 2
    }
  ];

  constructor(
    private route: ActivatedRoute,
    private productFacade: ProductFacade
    ) {
    const { productId, value } = this.route.snapshot.params;
    const { required, email } = Validators;
    this.form = new FormGroup({
      amount: new FormControl((+value * 100)),
      projectId: new FormControl(productId),
      email: new FormControl('julian.rojas@gmail.com', [required, email]),
      names: new FormControl('Julian T', [required]),
      lastNames: new FormControl('Rojas T', [required]),
      phone: new FormControl('3212283747', [required]),
      idTypeDocument: new FormControl(1, [required]),
      numberDocument: new FormControl('123123123', [required])
    });
    this.transaction$.pipe(
      filter(x => !!x)
    ).subscribe(t => {
      setTimeout(() => this.formButton.nativeElement.click(), 100);
    });
  }

  get transaction$(): Observable<CreateTransactionResponse> {
    return this.productFacade.transaction$;
  }

  public onSubmit(): void {
    this.productFacade.createTransaction(this.form.value);
  }


}
