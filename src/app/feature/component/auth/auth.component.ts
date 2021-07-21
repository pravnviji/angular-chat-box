import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChatSocketService } from '../../service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public commandData: Observable<any> = this.chatSocketService.commands;

  constructor(private chatSocketService: ChatSocketService) {
/*
    this.chatSocketService.listen('connect').subscribe((data) => {
      console.log("Connect subscibe");
      console.log(data);
    });

    this.chatSocketService.emit('message','hii');*/
 
    this.commandData.subscribe((data)=>{
      console.log(" :: commandData ::");
      console.log(data);
    })
  

   }

  ngOnInit(): void {
      console.log("calling command");
      this.chatSocketService.sendCommand();
  }

}
