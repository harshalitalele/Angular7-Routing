import { NgModule } from '@angular/core';
import { ViewerComponent } from '../viewer/viewer.component';
import { RouterModule } from '@angular/router';
import { StudyComponent } from '../study/study.component';

// To Do: Add User Role specific canActivate functioanlity for every Route
const appRoutes = [{
  path: 'viewer',
  component: ViewerComponent
}, {
  path: 'study',
  component: StudyComponent
}, {
  path: '**',
  component: ViewerComponent
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
