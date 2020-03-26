import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';

import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent {

  public form: FormGroup;
  public showFirstStep = true;
  public showSecondStep = false;

  constructor(
    private authFacade: AuthFacade
  ) {
    const { required, requiredTrue } = Validators;
    this.form = new FormGroup({
      name: new FormControl('', [required]),
      lastName: new FormControl('', [required]),
      phone: new FormControl('', [required]),
      email: new FormControl('', [required]),
      address: new FormControl('', [required]),
      documentType: new FormControl('', [required]),
      documentNumber: new FormControl('', [required]),
      username: new FormControl('', [required]),
      passwords: new FormGroup({
        password: new FormControl('', [required]),
        confirmPassword: new FormControl('', [required])
      }, { validators: [this.validateConfirmPassword] }),
      acceptTerms: new FormControl(null, [required, requiredTrue])
    });
  }

  private validateConfirmPassword = (c: AbstractControl): ValidationErrors => {
    return c.get('password').value === c.get('confirmPassword').value
      ? null : { validateConfirmPassword: { valid: false } };
  }

  public setFirstStep(): void {
    this.showSecondStep = false;
    this.showFirstStep = true;
  }

  public setSecondStep(): void {
    this.showSecondStep = true;
    this.showFirstStep = false;
  }

  public submit(): void {
    const {
      address, documentType, documentNumber, email, name, lastName, passwords, phone, username
    } = this.form.value;
    this.authFacade.createUser({
      address, documentType, email,
      name, lastName, phone, username,
      dni: documentNumber,
      password: passwords.password,
      roles: [ 'BILLER' ]
    });
  }

}
