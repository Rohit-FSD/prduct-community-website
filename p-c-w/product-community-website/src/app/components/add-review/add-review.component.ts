import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from 'src/app/common/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {
  review:Review=new Review();
  ratings=[1,2,3,4,5];

  constructor(private reviewService:ReviewService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
  }

  addReview(){
    const id=this.route.snapshot.paramMap.get('id');
    this.reviewService.addReview(id,this.review).subscribe(data=>{
      console.log(data);
      window.alert("Request sent to admin for approval");
      this.router.navigate([`/products/${id}`]);
    },
    error=>{console.log(error);
    })
  }

  onSubmit(){
    this.addReview();  
  }

}
