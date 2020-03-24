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

@NgModule({
  declarations: [
    ExploreComponent
  ],
  imports: [
    CommonModule,
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
