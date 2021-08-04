import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-filter-by-code',
  templateUrl: './filter-by-code.component.html',
  styleUrls: ['./filter-by-code.component.scss']
})
export class FilterByCodeComponent implements OnInit {

  product:Product=new Product();

  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.filterByBrand();
  }

  filterByBrand() {
    this.userService.filterByBrand(this.product).subscribe(data => {
      if(data==null){
        window.alert("No Such Product Exist..Click Ok To Explore More..")
      }
      else{
        this.router.navigate([`/products/${data}`]);
      }
    },error=>{
      console.log(error);
    }
    )
  }

}
