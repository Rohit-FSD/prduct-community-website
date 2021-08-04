import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  regDetails={
    userName:'',
    email:'',
    password:'',
  }

  email: number;

  confirmPassword:string;
  

  constructor(private loginService: LoginService,private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

  // validateEmail():any {
  //   this.loginService.validateEmail(this.regDetails.email).subscribe(data=>{
  //     return data;
  //   },error=>{
  //     return error;
      
  //   })
  // }

  onSubmit(){
      //register user
      // console.log(this.regDetails.userName);

      this.loginService.validateUsername(this.regDetails.userName).subscribe(data=>{
        if(data===1){
          window.alert("UserName already exists");
        }
        else if(this.email===1){
          window.alert("Email already exists");
        }
        else if(this.regDetails.password!==this.confirmPassword){   
          window.alert("Password doesn't match with each other");
        }
        else{
          this.loginService.registerUser(this.regDetails).subscribe((response:any)=>{
            // console.log('reg done');
            this.router.navigate(['/login']);
            },error=>{
            console.log(error);
          })
        }
      })

  }

}

