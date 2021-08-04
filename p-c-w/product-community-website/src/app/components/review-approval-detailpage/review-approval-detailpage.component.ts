import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/common/review';
import { ReviewApprovalService } from 'src/app/services/review-approval.service';

@Component({
  selector: 'app-review-approval-detailpage',
  templateUrl: './review-approval-detailpage.component.html',
  styleUrls: ['./review-approval-detailpage.component.scss']
})
export class ReviewApprovalDetailpageComponent implements OnInit {
  review:Review=new Review();

  constructor(private reviewApprovalService:ReviewApprovalService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleReviewDetails();
    })
  }

  handleReviewDetails() {
    const id :any= this.route.snapshot.paramMap.get('id');
    this.reviewApprovalService.getReview(id).subscribe(
      data=>{
        this.review=data;
      }
    )
  }

  onSubmit(){
    // console.log(this.review);
    const id :any= this.route.snapshot.paramMap.get('id');
    this.reviewApprovalService.approveReview(id,this.review).subscribe(data=>{
      // console.log(data);
      this.router.navigate(['/reviews']);
    },error=>{
      console.log(error);
      
    })

  }



}
