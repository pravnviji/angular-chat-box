import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthComponent,HomeComponent, MapComponent, DateComponent, RateComponent } from './component';

import { ChatFeatureRoutingModule } from './chat-box-routing.module';

const chatComponents = [
  AuthComponent,
  HomeComponent,
  MapComponent,
  DateComponent,
  RateComponent
];

@NgModule({
  declarations: [
   ...chatComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatFeatureRoutingModule
  ],
  exports: [
    ...chatComponents
  ]
})
export class ChatBoxModule { }
