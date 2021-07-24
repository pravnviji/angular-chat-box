import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.scss'],
})
export class RateComponent {
  @Input() rateData: any;
  public showRate: boolean = false;

  public userChoice: number | undefined;

  getRate(): number[] {
    if (this.rateData?.data.length < 2) {
      return this.rateData?.data;
    }

    if (this.rateData?.data[0] > this.rateData?.data[1]) {
      return this.rateData?.data;
    }

    const result = [];
    for (let i = this.rateData?.data[0]; i <= this.rateData?.data[1]; i++) {
      result.push(i);
    }
    return result;
  }

  selectRate(rate: number) {
    this.userChoice = rate;
    this.showRate = true;
  }
}
