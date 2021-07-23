import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {
  AuthComponent,
  HomeComponent,
  MapComponent,
  DateComponent,
  RateComponent,
  MessageComponent,
  CompleteComponent,
} from './component';

import { ChatFeatureRoutingModule } from './chat-box-routing.module';
import { BrowserModule } from '@angular/platform-browser';

const config: SocketIoConfig = { url: 'http://localhost', options: {} };
const chatComponents = [
  AuthComponent,
  HomeComponent,
  MapComponent,
  DateComponent,
  RateComponent,
  MessageComponent,
  CompleteComponent,
];

@NgModule({
  declarations: [...chatComponents],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ChatFeatureRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDim47ZPrEAcqBtef0FeldPLJYrcntOm5U',
    }),
    SocketIoModule.forRoot(config),
  ],
  exports: [...chatComponents],
})
export class ChatBoxModule {}
