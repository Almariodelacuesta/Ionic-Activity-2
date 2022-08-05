import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  email : string = '';
  password : string = '';

  constructor( private auth: AuthService ) {}

  ngOnit():void{
  }

  login(){

    if(this.email == ''){
      alert('Please enter email');
      return;
     }

    if(this.password == ''){
      alert('Please enter password');
      return;
     }

     this.auth.login(this.email, this.password);
     this.email = '';
     this.password = '';

  }
}
