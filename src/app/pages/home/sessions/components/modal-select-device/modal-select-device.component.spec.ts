import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSelectDeviceComponent } from './modal-select-device.component';

describe('ModalSelectDeviceComponent', () => {
  let component: ModalSelectDeviceComponent;
  let fixture: ComponentFixture<ModalSelectDeviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSelectDeviceComponent]
    });
    fixture = TestBed.createComponent(ModalSelectDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
