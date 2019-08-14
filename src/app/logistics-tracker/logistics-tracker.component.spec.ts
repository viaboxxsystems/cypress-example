import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsTrackerComponent } from './logistics-tracker.component';

describe('MainTableComponent', () => {
  let component: LogisticsTrackerComponent;
  let fixture: ComponentFixture<LogisticsTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
