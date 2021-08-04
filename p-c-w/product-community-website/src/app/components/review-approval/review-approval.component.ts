import { Component, OnInit } from '@angular/core';
import { Review } from 'src/app/common/review';
import { ReviewApprovalService } from 'src/app/services/review-approval.service';


@Component({
  selector: 'app-review-approval',
  templateUrl: './review-approval.component.html',
  styleUrls: ['./review-approval.component.scss']
})
export class ReviewApprovalComponent implements OnInit {
  reviews: Review[];

  constructor(private reviewApprovalService:ReviewApprovalService ) { }

  ngOnInit(): void {
    this.listReviews();
  }

  listReviews() {
     this.reviewApprovalService.getReviewList().subscribe(
      data=>{
        this.reviews = data;
      }
    )
  }

}
