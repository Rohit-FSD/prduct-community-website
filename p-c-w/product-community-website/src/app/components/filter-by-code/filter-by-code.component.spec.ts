import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterByCodeComponent } from './filter-by-code.component';

describe('FilterByCodeComponent', () => {
  let component: FilterByCodeComponent;
  let fixture: ComponentFixture<FilterByCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterByCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterByCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
