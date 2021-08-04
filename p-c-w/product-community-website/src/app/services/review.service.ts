import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Review } from '../common/review';

const httOptions={
  headers:new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`)
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  
  private baseUrl: string ="http://localhost:3000";
  private review:string="reviews";

  constructor(private httpClient:HttpClient) { }

  getReviewsByProduct(theProductId: any):Observable<Review[]> {
    const reviewUrl=`${this.baseUrl}/api/products/${theProductId}/${this.review}`
    return this.httpClient.get<GetResponse>(reviewUrl,httOptions).pipe(map(response=>response._embedded.reviews));
  }

  addReview(theProductId:any,review : Review):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}/addReview/${theProductId}`,review);
  }
  
}

//Unwraps the json from spring data rest _embedded entry
interface GetResponse{
  _embedded:{
    reviews:Review[];
  }
}
