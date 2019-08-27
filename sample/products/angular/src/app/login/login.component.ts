import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  view:Boolean=false;
  name:String;
  constructor() { }

  ngOnInit() {
  }

  showMessage(){
    this.view = !this.view; 
  }
  signUp(){
    this.view = !this.view; 
  }
}
