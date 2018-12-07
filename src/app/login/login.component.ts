import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userEmail: string;
  public userPassword: string;
  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.authService.user.subscribe( user =>  {
      if (user) {this.userService.save(user); }
      });
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook();
    this.authService.user.subscribe( user =>  {
      if (user) {this.userService.save(user); }
      });
  }
  loginWithTwitter() {
    this.authService.loginWithTwitter();
    this.authService.user.subscribe( user =>  {
      if (user) {this.userService.save(user); }
      });
  }
  loginWithEmailAndPwd() {
    this.authService.loginWithEmailAndPwd(this.userEmail, this.userPassword);
  }
  createUser() {
    this.authService.createUser(this.userEmail, this.userPassword);
  }
}
