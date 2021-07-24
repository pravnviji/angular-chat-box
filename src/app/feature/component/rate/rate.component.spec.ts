import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateComponent } from './rate.component';

describe('RateComponent', () => {
  let component: RateComponent;
  let fixture: ComponentFixture<RateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getRate() if data length < 2 dont accept and just return', () => {
    const mockData = {
      data: [0],
    };
    component.rateData = mockData;

    const result = component.getRate();

    expect(result).toEqual(mockData.data);
  });

  it('getRate() if arr[0] is greater than arr[1] dont accept and just return', () => {
    const mockData = {
      data: [1, 0],
    };
    component.rateData = mockData;

    const result = component.getRate();

    expect(result).toEqual(mockData.data);
  });

  it('getRate() if arr[1] is greater than arr[0] accept', () => {
    const mockData = {
      data: [0, 1],
    };
    component.rateData = mockData;

    const result = component.getRate();

    console.log(result);

    expect(result).toEqual(mockData.data);
  });

  it('selectRate() parse select option and show Rate & set Option into Userchoice variable', () => {
    const selectOpt = 1;

    component.selectRate(selectOpt);

    expect(component.userChoice).toEqual(selectOpt);
    expect(component.showRate).toBeTrue;
  });
});
