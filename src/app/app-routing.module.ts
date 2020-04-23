import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'explore',
    loadChildren: () => import('./modules/explore/explore.module').then(m => m.ExploreModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explore'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
