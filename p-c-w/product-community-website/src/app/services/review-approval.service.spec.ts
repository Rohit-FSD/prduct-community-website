import { TestBed } from '@angular/core/testing';

import { ReviewApprovalService } from './review-approval.service';

describe('ReviewApprovalService', () => {
  let service: ReviewApprovalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReviewApprovalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
