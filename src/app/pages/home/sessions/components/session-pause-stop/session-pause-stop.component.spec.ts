import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionPauseStopComponent } from './session-pause-stop.component';

describe('SessionPauseStopComponent', () => {
  let component: SessionPauseStopComponent;
  let fixture: ComponentFixture<SessionPauseStopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SessionPauseStopComponent]
    });
    fixture = TestBed.createComponent(SessionPauseStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
