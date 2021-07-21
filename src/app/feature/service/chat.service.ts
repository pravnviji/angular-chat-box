import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ChatCommand, MessageCommand } from './chat-command';

@Injectable({
    providedIn: 'root'
})
export class ChatSocketService {

   public commands = this.socket.fromEvent<ChatCommand>('command');
   public messages = this.socket.fromEvent<MessageCommand>('message');

    constructor(private socket: Socket) {}

    sendCommand(command:ChatCommand) {
        this.socket.emit('command', command);
      }

    sendMessage(command:MessageCommand) {
        this.socket.emit('message', command);
      }

}