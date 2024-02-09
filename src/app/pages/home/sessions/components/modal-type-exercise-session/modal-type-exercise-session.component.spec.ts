import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalTypeExerciseSessionComponent } from './modal-type-exercise-session.component';

describe('ModalTypeExerciseSessionComponent', () => {
  let component: ModalTypeExerciseSessionComponent;
  let fixture: ComponentFixture<ModalTypeExerciseSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTypeExerciseSessionComponent]
    });
    fixture = TestBed.createComponent(ModalTypeExerciseSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
