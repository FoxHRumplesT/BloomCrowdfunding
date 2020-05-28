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
import { ProfileComponent } from './components/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature(authFeatureName, authReducers),
    EffectsModule.forFeature([ AuthEffects ]),
    AuthRoutingModule
  ],
  exports: [
    AuthRoutingModule
  ],
  providers: [
    AuthFacade,
    AuthServices,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class AuthModule { }
