import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IChatCommand, ChatCommandTypes, ChatSocketService, Logger, IMessageCommand, IChatCommandResponse } from '../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  @ViewChild('inputcommand') inputcommand: ElementRef | undefined;
  @ViewChild('commandwindow') commandwindow: ElementRef | undefined;
  public subscription!: Subscription;

  public messages$: Observable<any> = this.chatSocketService.messages;
  public commands$: Observable<any> = this.chatSocketService.commands;

  public fileName = `HomeComponent`;
  public commandData: IChatCommandResponse | undefined;
  public user: any;



  constructor(private router: Router, private logger: Logger, private chatSocketService: ChatSocketService, private cdr: ChangeDetectorRef) {
    this.logger.debug(this.fileName, `constructor`);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('author');
    this.subscription = this.messages$.subscribe((data) => {
      this.logger.debug(this.fileName, `:: MessageData ::`);
      this.logger.debug(this.fileName, data);
      this.commandData = data;
      this.cdr.detectChanges();
    });
    this.subscription = this.commands$.subscribe((data: IChatCommandResponse) => {
      this.logger.debug(this.fileName, `:: CommandData ::`);
      this.logger.debug(this.fileName, data);
      this.commandData = data;
      this.cdr.detectChanges();
    });
  }

  sendMessage(): void {
    this.logger.debug(this.fileName, `getMessage`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const messageVal: IMessageCommand = { type: ChatCommandTypes.Message, author: sessionStorage.getItem('author')?.toString(), message: this.inputcommand?.nativeElement.value };
    this.chatSocketService.sendMessage(messageVal);
  }

  sendCommand(): void {
    this.logger.debug(this.fileName, `getCommand`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const commandVal: IChatCommand = { type: this.inputcommand?.nativeElement.value };
    this.chatSocketService.sendCommand(commandVal);
  }

  ngOnDestroy() {
    this.logger.debug(this.fileName, `ngOnDestroy`);
    this.subscription.unsubscribe();
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['auth']);
  }
}
