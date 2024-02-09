import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSessionComponent } from './card-session.component';

describe('CardSessionComponent', () => {
  let component: CardSessionComponent;
  let fixture: ComponentFixture<CardSessionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSessionComponent]
    });
    fixture = TestBed.createComponent(CardSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
