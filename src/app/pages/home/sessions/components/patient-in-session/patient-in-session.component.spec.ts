import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInSessionComponent } from './patient-in-session.component';

describe('PatientInSessionComponent', () => {
  let component: PatientInSessionComponent;
  let fixture: ComponentFixture<PatientInSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PatientInSessionComponent]
    });
    fixture = TestBed.createComponent(PatientInSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
