import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyFormatPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CurrencyFormatPipe
  ]
})
export class SharedModule { }
