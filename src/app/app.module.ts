import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatBoxModule } from './feature/chat-box.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, ChatBoxModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
