import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../common/product';

const httOptions={
  headers:new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Authorization',`Bearer ${localStorage.getItem('token')}`)
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 
  private baseUrl: string ="http://localhost:3000/api/products";

  constructor(private httpClient: HttpClient) { }

  getProduct(theProductId: any):Observable<Product> {
    const productUrl=`${this.baseUrl}/${theProductId}`;
    return this.httpClient.get<Product>(productUrl,httOptions);
  }

  //map the json data from spring data rest to Product array
  getProductList():Observable<Product[]>{
    return this.httpClient.get<GetResponse>(this.baseUrl,httOptions).pipe(map(response =>response._embedded.products))
  }

  //search product by keyword
  searchProducts(theKeyword: string):Observable<Product[]> {
    const searchUrl=`${this.baseUrl}/search/findByProductNameContaining?productName=${theKeyword}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(map(response=>response._embedded.products));
  }

  //search product by brand
  searchProductsByBrand(theKeyword: string) {
    const searchUrl=`${this.baseUrl}/search/findByBrandContaining?brand=${theKeyword}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(map(response=>response._embedded.products));
  }
  
  //search product by product code
  searchProductsByCode(theKeyword: string) {
    const searchUrl=`${this.baseUrl}/search/findByProductCodeContaining?productCode=${theKeyword}`;
    return this.httpClient.get<GetResponse>(searchUrl).pipe(map(response=>response._embedded.products));
  }

}


//Unwraps the json from spring data rest _embedded entry
interface GetResponse{
  _embedded:{
    products:Product[];
  }
}

