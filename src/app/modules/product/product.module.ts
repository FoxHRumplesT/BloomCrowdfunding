import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product.component';
import { ProductFacade } from './product.facade';
import { productFeatureName } from './store/state';
import { productReducers } from './store/reducers';
import { ProductEffects } from './store/effects';
import { ProductServices } from './product.services';
import { ValuesComponent } from './components/values/values.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { SimulatorComponent } from './components/simulator/simulator.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductComponent,
    ValuesComponent,
    TabsComponent,
    SimulatorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature(productFeatureName, productReducers),
    EffectsModule.forFeature([ ProductEffects ]),
    ProductRoutingModule
  ],
  providers: [
    ProductFacade,
    ProductServices
  ]
})
export class ProductModule { }
