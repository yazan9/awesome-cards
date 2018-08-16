import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoryComponent } from './cards-category.component';

describe('CardsCategoryComponent', () => {
  let component: CardsCategoryComponent;
  let fixture: ComponentFixture<CardsCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
