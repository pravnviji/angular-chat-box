import { Component, Input, OnInit } from '@angular/core';
import { Logger } from '../../service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() messageData: any | undefined;
  public fileName = `MessageComponent`;

  constructor( private logger: Logger) { }

  ngOnInit(): void {
    this.logger.debug(this.fileName, `ngOnInit`);
    this.logger.debug(this.fileName, this.messageData);
  }

}
