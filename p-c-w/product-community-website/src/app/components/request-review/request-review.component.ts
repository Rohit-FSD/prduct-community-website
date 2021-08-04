import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.scss']
})
export class RequestReviewComponent implements OnInit {

  product:Product=new Product();

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.requestForReview();
  }
  requestForReview() {
    this.userService.requestForReview(this.product).subscribe(data=>{
      if(data==null){
        window.alert("Request has been sent to Admin. Click Ok To Explore")
        this.router.navigate(['/products']);
      }
      else{
        window.alert("ERROR:Product Found, You will be redirected to this product page in 5 seconds Click ok to continue");
        setTimeout(() => {
          this.router.navigate([`/products/${data}`])
        }, 5000);  
      }
    },
    error=>{
      console.log(error);
    })
  }
  
  

}
