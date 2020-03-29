import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';

import { exploreFeatureName } from './store/state';
import { exploreReducers } from './store/reducers';
import { ExploreEffects } from './store/effects';
import { ExploreRoutingModule } from './explore-routing.module';
import { ExploreServices } from './explore.services';
import { ExploreFacade } from './explore.facade';
import { ExploreComponent } from './explore.component';
import { SharedModule } from '../shared/shared.module';
import { ProductCardComponent } from './components/product-card/product-card.component';

@NgModule({
  declarations: [
    ExploreComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StoreModule.forFeature(exploreFeatureName, exploreReducers),
    EffectsModule.forFeature([ ExploreEffects ]),
    ExploreRoutingModule
  ],
  providers: [
    ExploreFacade,
    ExploreServices
  ]
})
export class ExploreModule { }
