import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { NO_WHITESPACE } from '@app/constants/regex-patters';
import { AuthFacade } from '../../auth.facade';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public form: FormGroup;

  constructor(
    private authFacade: AuthFacade
  ) {
    const { required, minLength, maxLength, pattern} = Validators;
    this.form = new FormGroup({
      username: new FormControl('excecrable', [required, pattern(NO_WHITESPACE), minLength(8), maxLength(50)]),
      password: new FormControl('Aruma2020#', [required, minLength(8), maxLength(50)])
    });
  }

  public submit(): void {
    const { username, password} = this.form.value;
    this.authFacade.login(username, password);
  }

}
