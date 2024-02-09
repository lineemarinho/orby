import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCardNamneseComponent } from './modal-card-namnese.component';

describe('ModalCardNamneseComponent', () => {
  let component: ModalCardNamneseComponent;
  let fixture: ComponentFixture<ModalCardNamneseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalCardNamneseComponent]
    });
    fixture = TestBed.createComponent(ModalCardNamneseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
