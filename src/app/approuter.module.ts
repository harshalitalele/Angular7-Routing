import { NgModule } from '@angular/core';
import { Feature1Component } from '../Feature1/feature1.component';
import { RouterModule } from '@angular/router';
import { Feature2Component } from '../Feature 2/feature2.component';

// To Do: Add User Role specific canActivate functioanlity for every Route
const appRoutes = [{
  path: 'feature1',
  component: Feature1Component
}, {
  path: 'feature2',
  component: Feature2Component
}, {
  path: '**',
  component: Feature1Component
}];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRouterModule {
  //
}
