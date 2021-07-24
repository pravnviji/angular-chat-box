import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IChatCommand, IMessageCommand } from './chat-command';

@Injectable({
  providedIn: 'root',
})
export class ChatSocketService {
  public commands$ = this.socket.fromEvent<IChatCommand>('command');
  public messages$ = this.socket.fromEvent<IMessageCommand>('message');

  constructor(private socket: Socket) {}

  sendCommand(command: IChatCommand) {
    this.socket.emit('command', command);
  }

  sendMessage(command: IMessageCommand) {
    this.socket.emit('message', command);
  }
}
