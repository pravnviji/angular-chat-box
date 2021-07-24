import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { DateComponent } from './date.component';

describe('DateComponent', () => {
  let component: DateComponent;
  let fixture: ComponentFixture<DateComponent>;
  let mockData = {
    type: 'date',
    data: new Date().toISOString(),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.dateData = mockData;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngonit -> to call getTotalDays', () => {
    const spy = spyOn(component, 'getTotalDays');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('getTotalDays - Pick the corresponding date', () => {
    const mockData: { isoDateString: string; expected: string[] }[] = [
      {
        isoDateString: '2021-07-19T08:31:47.431Z',
        expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
      {
        isoDateString: '2021-07-20T08:31:47.431Z',
        expected: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Monday'],
      },
      {
        isoDateString: '2021-07-21T08:31:47.431Z',
        expected: ['Wednesday', 'Thursday', 'Friday', 'Monday', 'Tuesday'],
      },
      {
        isoDateString: '2021-07-22T08:31:47.431Z',
        expected: ['Thursday', 'Friday', 'Monday', 'Tuesday', 'Wednesday'],
      },
      {
        isoDateString: '2021-07-23T08:31:47.431Z',
        expected: ['Friday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      },
      {
        isoDateString: '2021-07-24T08:31:47.431Z',
        expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
      {
        isoDateString: '2021-07-25T08:31:47.431Z',
        expected: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      },
    ];
    mockData.forEach((item) =>
      expect(component.getTotalDays(item.isoDateString)).toEqual(item.expected)
    );
  });

  it('selectDate is called, show user choose day', () => {
    const selDay = 'Wednesday';
    component.selectDate(selDay);
    expect(component.showSelDate).toBeTrue();
  });
});
