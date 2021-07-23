import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { AuthComponent, HomeComponent, MapComponent, DateComponent, RateComponent, MessageComponent, CompleteComponent } from './component';

import { ChatFeatureRoutingModule } from './chat-box-routing.module';

const chatComponents = [
  AuthComponent,
  HomeComponent,
  MapComponent,
  DateComponent,
  RateComponent,
  MessageComponent,
  CompleteComponent
];

@NgModule({
  declarations: [
    ...chatComponents
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatFeatureRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDim47ZPrEAcqBtef0FeldPLJYrcntOm5U'
    }),
  ],
  exports: [
    ...chatComponents
  ]
})
export class ChatBoxModule { }
