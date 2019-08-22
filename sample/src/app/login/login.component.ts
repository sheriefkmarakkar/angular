import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  view:boolean=false;
  public show(){
    this.view=!this.view
  }
  constructor() { }

  ngOnInit() {
  }

}
