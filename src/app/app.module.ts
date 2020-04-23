import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { environment } from '@environment';
import { AppFacade } from './app.facade';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules/shared/shared.module';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    SharedModule,
    StoreModule.forRoot({}),
    !environment.production ? StoreDevtoolsModule.instrument({
      maxAge: 50
    }) : [],
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [
    AppFacade
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
