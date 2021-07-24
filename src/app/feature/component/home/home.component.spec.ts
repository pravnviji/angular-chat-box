/*import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

import {
  ChatSocketServiceStub,
  Logger,
  ChatSocketService,
} from '../../service';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';

class MockLoggerService {
  log() {
    return of(true);
  }
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: Logger, userClass: MockLoggerService },
        { provide: ChatSocketService, useClass: ChatSocketServiceStub },
        { provide: ChangeDetectorRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
*/
