import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { io } from 'socket.io-client';
import { Socket } from 'ngx-socket-io';
@Injectable({
    providedIn: 'root'
})
export class ChatSocketService {

    //socket: any;
   // public commands = new Subject<any>();
   // public messages = new Subject<any>();

   commands = this.socket.fromEvent<any>('command');
   messages = this.socket.fromEvent<any>('message');

    constructor(private socket: Socket) {}

    sendCommand() {
        this.socket.emit('command', {type: 'map' });
      }

}