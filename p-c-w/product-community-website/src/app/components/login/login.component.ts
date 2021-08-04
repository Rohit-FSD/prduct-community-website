import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials={
    userName:'',
    password:'',
  }

  constructor(private loginService: LoginService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if((this.credentials.userName!=''&&this.credentials.password!='')&&(this.credentials.userName!=null&&this.credentials.password!=null)){
      console.log('form to server');
      //generate token
      this.loginService.generateToken(this.credentials).subscribe((response:any)=>{
        console.log(response.token);
        this.loginService.loginUser(response.token);
        window.location.href="/";
        
      },error=>{
        window.alert("Bad Credentials")
        console.log(error);
        
      })
    }
    else{
      console.log('fields empty');
      
    }
  }
}
