import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { Review } from '../common/review';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl: string ="http://localhost:3000";

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get(`${this.baseUrl}/getUsers`);
  }

  sortProductByBrand(keyword:string){
    return this.http.get<Product[]>(`${this.baseUrl}/sortByBrand?brand=${keyword}`);
  }

  requestForReview(product:Product){
    return this.http.post<number>(`${this.baseUrl}/requestReviewForProduct`,product);
  }

  filterByBrand(product:Product){
    return this.http.post<number>(`${this.baseUrl}/findByProductCode`,product);
  }

  getProductBrands(){
    return this.http.get<string[]>(`${this.baseUrl}/getProductBrands`);
  }
  
}

// interface GetResponseProducts{
//   products:Product[],
//   reviews:Review[]
// }