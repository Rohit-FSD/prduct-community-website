import { Component, OnInit } from '@angular/core';
import { Userinfo } from 'src/app/common/userinfo';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // userInfo={};
  user={};
  user1:any
  userInfo=[{}]
  info=[{}]
  role:string;

  public loggedIn=false;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.loggedIn=this.loginService.isLoggedIn();
    this.getUserInfo();
  }

  getUserInfo() {
    this.loginService.getUserInfo().subscribe(data => {
      for (const [key, value] of Object.entries(data)) {
        this.userInfo.push(value);
        // console.log(this.userInfo);
    }
    this.user=this.userInfo[1];
    // console.log(this.user);
    for (const [key, value] of Object.entries(this.user)) {
      this.user1=value
    }
    this.role=this.user1.authority;
    },
    error=>{
      console.log(error);
    })
  }

  

}
