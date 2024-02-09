import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeSessionComponent } from './modal-type-session.component';

describe('ModalTypeSessionComponent', () => {
  let component: ModalTypeSessionComponent;
  let fixture: ComponentFixture<ModalTypeSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTypeSessionComponent]
    });
    fixture = TestBed.createComponent(ModalTypeSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
