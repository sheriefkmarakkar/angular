import { Component, OnInit, Inject } from '@angular/core';
//import { LOCAL_STORAGE , WebStorageService } from 'angular-webstorage-service'



@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
//@Inject(LOCAL_STORAGE) private w: WebStorageService
export class DeleteproductComponent implements OnInit {
  val;
user;
  constructor() { }

  ngOnInit() {
  
   this.user=localStorage.getItem("username")
}
add()
{
  localStorage.setItem("username",this.val)
}}