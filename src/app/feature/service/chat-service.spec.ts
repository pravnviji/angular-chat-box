import { TestBed, getTestBed } from '@angular/core/testing';
import { SocketIoModule, SocketIoConfig, Socket } from 'ngx-socket-io';
import { ChatSocketService } from './chat.service';

import {
  ChatCommandTypes,
  IChatCommand,
  IMessageCommand,
} from './chat-command';

describe('ChatService', () => {
  let injector: TestBed;
  let serviceTest: ChatSocketService;
  let mockSocket = {
    emit: jasmine.createSpy('emit'),
    fromEvent: jasmine.createSpy('fromEvent'),
  };
  const config: SocketIoConfig = { url: 'http://localhost', options: {} };

  const serverData = {
    command: {
      type: 'map',
      data: {
        lat: 48.1482933,
        lng: 11.586628,
      },
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SocketIoModule.forRoot(config)],
      providers: [{ provide: Socket, useValue: mockSocket }],
    });
    injector = getTestBed();
    serviceTest = injector.get(ChatSocketService);
  });

  it('should be created', () => {
    expect(serviceTest).toBeTruthy();
  });

  it('sendCommand should trigger socket.emit with parameter as command and usercommandobject', () => {
    const userReq: IChatCommand = {
      type: ChatCommandTypes.Map,
    };

    serviceTest.sendCommand(userReq);

    expect(mockSocket.emit).toHaveBeenCalledWith('command', userReq);
  });

  it('sendMessage should trigger socket.emit with parameter as message and usermessageobject', () => {
    const userReq: IMessageCommand = {
      type: ChatCommandTypes.Message,
      author: 'Admin',
      message: 'Hello !',
    };

    serviceTest.sendMessage(userReq);

    expect(mockSocket.emit).toHaveBeenCalledWith('message', userReq);
  });
});
