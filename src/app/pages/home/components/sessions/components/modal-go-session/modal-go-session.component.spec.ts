import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGoSessionComponent } from './modal-go-session.component';

describe('ModalGoSessionComponent', () => {
  let component: ModalGoSessionComponent;
  let fixture: ComponentFixture<ModalGoSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalGoSessionComponent]
    });
    fixture = TestBed.createComponent(ModalGoSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
