import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCategoryListComponent } from './cards-category-list.component';

describe('CardsCategoryListComponent', () => {
  let component: CardsCategoryListComponent;
  let fixture: ComponentFixture<CardsCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
