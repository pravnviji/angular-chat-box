import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './component/home/home.component';
import { MapComponent } from './component/map/map.component';
import { DateComponent } from './component/date/date.component';
import { RateComponent } from './component/rate/rate.component';

import { ChatFeatureRoutingModule } from './chat-box-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    DateComponent,
    RateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChatFeatureRoutingModule
  ]
})
export class ChatBoxModule { }
