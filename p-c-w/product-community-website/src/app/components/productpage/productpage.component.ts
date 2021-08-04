import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss']
})
export class ProductpageComponent implements OnInit {

  products: Product[];
  product: Product=new Product();
  searchMode:boolean;
  brands=[''];
  

  constructor(private userService: UserService,private productService: ProductService,private route: ActivatedRoute) { }

  //similar to post construct
  ngOnInit(): void {
    this.listProducts();
    this.getProductBrands();
  }

  listProducts(){
    this.searchMode=this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
      this.handleSearchProductsByBrand();
      // this.handleSearchProductsByCode();
    }
    else
      this.handleListProducts();
  }

  handleSearchProductsByCode() {
    const theKeyword = this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProductsByCode(theKeyword!).subscribe(data=>{
      this.products=data;
    })
  }

  handleSearchProductsByBrand() {
    const theKeyword = this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProductsByBrand(theKeyword!).subscribe(data=>{
      this.products=data;
    })
  }

  handleSearchProducts(){
    
    const theKeyword = this.route.snapshot.paramMap.get('keyword');
    this.productService.searchProducts(theKeyword!).subscribe(data=>{
      this.products=data;
    })
    
  }

  getUser(){
    this.userService.getUser().subscribe(user => {
      console.log(user);
    },error => {
      console.log(error);
    })
  }

  handleListProducts(){
    this.productService.getProductList().subscribe(
    
      data=>{
        this.products = data;
      }
    )
  }

  sortByBrand(){
    const keyword = this.product.brand;
    this.userService.sortProductByBrand(keyword!).subscribe(data=>{
      // console.log(data);
      this.products=data;
    },error=>{
      console.log(error);
    }
    )
  }

  getProductBrands(){
    this.userService.getProductBrands().subscribe(data=>{
      // console.log(data);
      this.brands=data;
    },error=>{
      console.log(error);
      
    })
  }

}
