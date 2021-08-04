import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httOptions={
  headers:new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`)
}

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  private baseUrl: string ="http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  getNumberOfUsers():Observable<number>{
    return this.httpClient.get<number>(`${this.baseUrl}/getNumberOfUsers`);
  }

  getNumberOfReviews(){
    return this.httpClient.get<number>(`${this.baseUrl}/getNumberOfReviews`);
  }

  getNumberOfProducts(){
    return this.httpClient.get<number>(`${this.baseUrl}/getNumberOfProducts`);
  }

}
