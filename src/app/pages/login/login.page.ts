import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  authService:  AuthService, private  router:  Router) { }

ngOnInit() {
  }

  login(form){
    console.log("login");
    this.authService.login(form.value).subscribe((res)=>{
    console.log("logged in");
    this.router.navigateByUrl('home');
    });
    }


}
