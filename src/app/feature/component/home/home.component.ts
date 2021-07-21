import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChatCommand, ChatCommandTypes, ChatSocketService, Logger, MessageCommand } from '../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('inputcommand') inputcommand: ElementRef | undefined;
  public subscription!: Subscription;

  public messages$: Observable<any> = this.chatSocketService.messages;
  public commands$: Observable<any> = this.chatSocketService.commands;

  public fileName = `HomeComponent`;


  constructor(private logger: Logger, private chatSocketService: ChatSocketService) {
    this.logger.debug(this.fileName, `constructor`);
  }

  ngOnInit(): void {
    this.subscription = this.messages$.subscribe((data) => {
      this.logger.debug(this.fileName, `:: MessageData ::`);
      this.logger.debug(this.fileName, data);
    });
    this.subscription = this.commands$.subscribe((data) => {
      this.logger.debug(this.fileName, `:: CommandData ::`);
      this.logger.debug(this.fileName, data);
    });
  }

  getMessage(): void{
    this.logger.debug(this.fileName, `getMessage`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const messageVal: MessageCommand= { type: ChatCommandTypes.Message, author : sessionStorage.getItem('author')?.toString(), message:this.inputcommand?.nativeElement.value };
    this.chatSocketService.sendMessage(messageVal);
  }

  getCommand(): void{
    this.logger.debug(this.fileName, `getCommand`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const commandVal: ChatCommand= { type : this.inputcommand?.nativeElement.value };
    this.chatSocketService.sendCommand(commandVal);
  }

  ngOnDestroy() {
    this.logger.debug(this.fileName, `ngOnDestroy`);
    this.subscription.unsubscribe();
  }

}
