import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AreariservataComponent } from './areariservata/areariservata.component';

const routes: Routes = [
  {
    path: 'area-riservata', component: AreariservataComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
