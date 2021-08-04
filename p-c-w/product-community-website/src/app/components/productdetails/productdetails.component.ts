import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { Review } from 'src/app/common/review';
import { ProductService } from 'src/app/services/product.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  product:Product=new Product();
  reviews:Review[];
  averageRating:number=0;
  nor:number=0;
  constructor(private productService: ProductService,private reviewService:ReviewService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(()=>{
      this.handleProductDetails();
    })

    this.route.paramMap.subscribe(()=>{
      this.getReviewsByProduct(); 
    })
  }

  getReviewsByProduct() {
    const theProductId :any= this.route.snapshot.paramMap.get('id');
    this.reviewService.getReviewsByProduct(theProductId).subscribe(
      data=>{ 
        this.reviews=data;
        let total =0;
        let numberOfReviews=0;
        for(let i=0;i<this.reviews.length;i++){
          if(this.reviews[i].reviewStatus==null){
            
          }
          else{
            total+=Number(this.reviews[i].reviewRating);
            numberOfReviews++;
          }
        }
        // console.log(total);
        // console.log(numberOfReviews);
        
        if(numberOfReviews!==0){
          this.averageRating=total/numberOfReviews;
          this.nor=numberOfReviews
          } 
        else
          this.averageRating=0;
      }
    )
  }
  
  handleProductDetails() {
    const theProductId :any= this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(theProductId).subscribe(
      data=>{
        this.product=data;
      }
    )
  }

}
