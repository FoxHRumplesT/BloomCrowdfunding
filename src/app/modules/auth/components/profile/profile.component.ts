import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component } from '@angular/core';

import { AppFacade } from '@app/app.facade';
import { User } from '../../auth.entities';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {

  public form: FormGroup;
  public isChangingPassword = false;

  constructor(
    private appFacade: AppFacade
  ) {
    const { required } = Validators;
    this.form = new FormGroup({
      oldPassword: new FormControl('', [required]),
      passwords: new FormGroup({
        password: new FormControl('', [required]),
        confirmPassword: new FormControl('', [required])
      }, { validators: [this.validateConfirmPassword] }),
    });
  }

  get user$(): Observable<User> {
    return this.appFacade.user$;
  }

  private validateConfirmPassword = (c: AbstractControl): ValidationErrors => {
    return c.get('password').value === c.get('confirmPassword').value
      ? null : { validateConfirmPassword: { valid: false } };
  }

  public toggleChangingPassword(): void {
    this.isChangingPassword = !this.isChangingPassword;
  }

  public submit(): void {
    console.log(this.form.value)
  }
}
