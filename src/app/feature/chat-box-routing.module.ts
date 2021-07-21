import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    outlet: 'chat-main'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatFeatureRoutingModule {}