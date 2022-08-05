import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage implements OnInit {

  email : string = '';
  password : string = '';

  constructor( private auth : AuthService ) {}
  ngOnInit(): void {
  }

  register(){

    if(this.email == ''){
      alert('Please enter email');
      return;
     }

    if(this.password == ''){
      alert('Please enter password');
      return;
     }

     this.auth.register(this.email, this.password);
     this.email = '';
     this.password = '';

  }

}
