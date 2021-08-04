import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl: string ="http://localhost:3000";

  constructor(private http: HttpClient) { }

  //calling server to generate token

  generateToken(credentials:any){
    return this.http.post(`${this.baseUrl}/token`,credentials);
  }

  getUserInfo(){
    return this.http.get(`${this.baseUrl}/userinfo`);
  }

  registerUser(regDetails:any){
    return this.http.post(`${this.baseUrl}/register`,regDetails);
  }

  validateUsername(username:string){
    return this.http.get<number>(`${this.baseUrl}/api/user/findByUsername?userName=${username}`);
  }

  validateEmail(email:string){
    return this.http.get<number>(`${this.baseUrl}/api/user/findByEmail?email=${email}`)
  }


  loginUser(token: any){
    localStorage.setItem("token",token)
    return true;
  }

  isLoggedIn(){
    let token=localStorage.getItem("token");
    if(token==undefined||token===''||token==null)
      return false;
    else
      return true;
  }

  logout(){
    localStorage.removeItem("token");
    return true;
  }

  getToken(){
    return localStorage.getItem("token");
  }
}
