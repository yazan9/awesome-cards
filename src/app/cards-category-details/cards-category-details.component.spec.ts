import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoryDetailsComponent } from './cards-category-details.component';

describe('CardsCategoryDetailsComponent', () => {
  let component: CardsCategoryDetailsComponent;
  let fixture: ComponentFixture<CardsCategoryDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCategoryDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCategoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
