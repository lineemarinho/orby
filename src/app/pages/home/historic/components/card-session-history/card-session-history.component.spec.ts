import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSessionHistoryComponent } from './card-session-history.component';

describe('CardSessionHistoryComponent', () => {
  let component: CardSessionHistoryComponent;
  let fixture: ComponentFixture<CardSessionHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSessionHistoryComponent]
    });
    fixture = TestBed.createComponent(CardSessionHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
