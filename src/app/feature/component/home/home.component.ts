import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  IChatCommand,
  ChatCommandTypes,
  ChatSocketService,
  Logger,
  IMessageCommand,
  IChatCommandResponse,
  untilDestroyed,
} from '../../service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  @ViewChild('inputcommand') inputcommand: ElementRef | undefined;
  @ViewChild('commandwindow') commandwindow: ElementRef | undefined;

  public messages$: Observable<any> = this.chatSocketService.messages$;
  public commands$: Observable<any> = this.chatSocketService.commands$;

  public fileName = `HomeComponent`;
  public commandData: IChatCommandResponse | undefined;
  public user: any;

  constructor(
    private router: Router,
    private logger: Logger,
    private chatSocketService: ChatSocketService,
    private cdr: ChangeDetectorRef
  ) {
    this.logger.debug(this.fileName, `constructor`);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('author');
    this.getMessages();
    this.getCommands();
  }

  getMessages() {
    this.messages$
      .pipe(
        untilDestroyed(this),
        catchError(async (error) => this.onGetFeedError(error)),
        map((result) => this.tranformResult(result))
      )
      .subscribe();
  }

  getCommands() {
    this.commands$
      .pipe(
        untilDestroyed(this),
        catchError(async (error) => this.onGetFeedError(error)),
        map((result) => this.tranformResult(result))
      )
      .subscribe();
  }

  tranformResult(data: IChatCommandResponse): void {
    this.logger.debug(this.fileName, `:: CommandData ::`);
    this.logger.debug(this.fileName, data);
    this.commandData = data;
    this.cdr.detectChanges();
  }

  onGetFeedError(error: any) {
    this.logger.debug(this.fileName, `onGetFeedError`);
    this.logger.debug(this.fileName, error);
  }

  sendMessage(): void {
    this.logger.debug(this.fileName, `getMessage`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const messageVal: IMessageCommand = {
      type: ChatCommandTypes.Message,
      author: sessionStorage.getItem('author')?.toString(),
      message: this.inputcommand?.nativeElement.value,
    };
    this.chatSocketService.sendMessage(messageVal);
  }

  sendCommand(): void {
    this.logger.debug(this.fileName, `getCommand`);
    this.logger.debug(this.fileName, this.inputcommand?.nativeElement.value);
    const commandVal: IChatCommand = {
      type: this.inputcommand?.nativeElement.value,
    };
    this.chatSocketService.sendCommand(commandVal);
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['auth']);
  }

  ngOnDestroy() {}
}
