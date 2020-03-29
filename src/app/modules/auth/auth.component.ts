import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {

  constructor(
    private location: Location
  ) {}

  public goBack(): void {
    this.location.back();
  }

}
