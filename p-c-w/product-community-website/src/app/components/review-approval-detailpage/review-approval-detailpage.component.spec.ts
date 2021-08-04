import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewApprovalDetailpageComponent } from './review-approval-detailpage.component';

describe('ReviewApprovalDetailpageComponent', () => {
  let component: ReviewApprovalDetailpageComponent;
  let fixture: ComponentFixture<ReviewApprovalDetailpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewApprovalDetailpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewApprovalDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
