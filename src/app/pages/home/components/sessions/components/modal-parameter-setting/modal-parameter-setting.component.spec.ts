import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalParameterSettingComponent } from './modal-parameter-setting.component';

describe('ModalParameterSettingComponent', () => {
  let component: ModalParameterSettingComponent;
  let fixture: ComponentFixture<ModalParameterSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalParameterSettingComponent]
    });
    fixture = TestBed.createComponent(ModalParameterSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
