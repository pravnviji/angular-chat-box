import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Logger } from '../../service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss'],
})
export class CompleteComponent {
  @Input() completeCommand: any;
  public fileName = `CompleteComponent`;

  constructor(private router: Router, private logger: Logger) {
    this.logger.debug(this.fileName, `constructor`);
  }

  selectOption(opt: string) {
    this.logger.debug(this.fileName, `selectOption`);
    this.logger.debug(this.fileName, opt);
    if (opt === 'Yes') {
      sessionStorage.clear();
      this.router.navigate(['auth']);
    }
  }
}
