import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { authFeatureName } from './store/state';
import { authReducers } from './store/reducers';
import { AuthEffects } from './store/effects';
import { AuthFacade } from './auth.facade';
import { AuthServices } from './auth.services';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureName, authReducers),
    EffectsModule.forFeature([ AuthEffects ]),
    AuthRoutingModule
  ],
  providers: [
    AuthFacade,
    AuthServices
  ]
})
export class AuthModule { }
