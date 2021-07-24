import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { CompleteComponent } from './complete.component';
import { Logger } from '../../service';

import { of } from 'rxjs';

class MockLoggerService {
  log() {
    return of(true);
  }
}
describe('CompleteComponent', () => {
  let component: CompleteComponent;
  let fixture: ComponentFixture<CompleteComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompleteComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Logger, userClass: MockLoggerService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('redirect to auth component if user clicks -> yes', () => {
    const opt = 'Yes';
    component.selectOption(opt);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['auth']);
  });
});
