import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  MapComponent,
  DateComponent,
  RateComponent,
  AuthComponent,
} from './component';

export const chatRoutes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(chatRoutes)],
  exports: [RouterModule],
})
export class ChatFeatureRoutingModule {}
