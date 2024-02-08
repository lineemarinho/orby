import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPatientRecordComponent } from './modal-patient-record.component';

describe('ModalPatientRecordComponent', () => {
  let component: ModalPatientRecordComponent;
  let fixture: ComponentFixture<ModalPatientRecordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalPatientRecordComponent]
    });
    fixture = TestBed.createComponent(ModalPatientRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
