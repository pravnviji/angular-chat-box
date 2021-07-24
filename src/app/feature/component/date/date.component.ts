import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss'],
})
export class DateComponent {
  sunday = 0;
  saturday = 6;
  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  @Input() dateData: any;
  public result: string[] | undefined;
  public showSelDate: boolean = false;
  public userChoice: string | undefined;

  ngOnInit() {
    this.getTotalDays(this.dateData?.data);
  }

  getTotalDays(dateString: string): string[] {
    const date = new Date(dateString);
    const day = date.getDay();

    if (day === this.sunday || day === this.saturday) {
      return this.days;
    }

    this.result = this.days.slice(day - 1);
    this.result.push(
      ...this.days.slice(0, this.days.length - this.result.length)
    );

    return this.result;
  }

  selectDate(selData: string) {
    this.userChoice = selData;
    this.showSelDate = true;

    const index = this.days.indexOf(selData);
    this.result = this.days.slice(index);

    this.result.push(
      ...this.days.slice(0, this.days.length - this.result.length)
    );

    return this.result;
  }
}
