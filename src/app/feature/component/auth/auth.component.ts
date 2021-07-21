import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ChatSocketService, ChatCommandTypes, MessageCommand, Logger } from '../../service';
import { UserForm } from './user-model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public messages$: Observable<any> = this.chatSocketService.messages;
  public model: UserForm;
  public subscription!: Subscription;
  public author!: string;

  public fileName = `AuthComponent`;

  constructor(private router: Router,
    private logger: Logger,
    private chatSocketService: ChatSocketService) {
    this.model = new UserForm('', '');
  }

  ngOnInit(): void {
    this.subscription = this.messages$.subscribe((data) => {
      this.logger.debug(this.fileName, `:: MessageData ::`);
      this.logger.debug(this.fileName, data);
      if (data.authorised) {
        sessionStorage.setItem('author', this.author);
        this.router.navigate(['home']);
        this.logger.debug(this.fileName, "navigate");
      } else {
        alert("Invalid user");
      }
    })
  }

  onSubmit() {
    const username = this.model.username;
    const password = this.model.password;
    this.logger.debug(this.fileName, `OnSubmit`);
    this.logger.debug(this.fileName, `${username} : ${password}`);
    this.author = (this.model.username) ? this.model.username : '';
    const parseCommand: MessageCommand = { type: ChatCommandTypes.Message, author: username };
    this.chatSocketService.sendMessage(parseCommand);
  }

  ngOnDestroy() {
    this.logger.debug(this.fileName, `ngOnDestroy`);
    this.subscription.unsubscribe();
  }
}
