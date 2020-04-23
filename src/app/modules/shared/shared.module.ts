import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { ModalComponent } from './components/modal/modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CurrencyFormatPipe,
    ModalComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    ModalComponent,
    FooterComponent,
    LoaderComponent,
    CurrencyFormatPipe
  ]
})
export class SharedModule { }
