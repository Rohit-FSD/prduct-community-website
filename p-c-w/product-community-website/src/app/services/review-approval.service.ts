import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../common/review';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewApprovalService {

  private baseUrl: string ="http://localhost:3000/api/reviews";

  constructor(private httpClient: HttpClient) { }

  getReview(reviewId: any):Observable<Review> {
    const reviewUrl=`${this.baseUrl}/${reviewId}`;
    return this.httpClient.get<Review>(reviewUrl);
  }

  getReviewList(): Observable<Review[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(map(response =>response._embedded.reviews))
  }

  approveReview(id:any,review:Review){
    return this.httpClient.patch(`${this.baseUrl}/${id}`,review);
  }

}


//Unwraps the json from spring data rest _embedded entry
interface GetResponse{
  _embedded:{
    reviews:Review[];
  }
}
