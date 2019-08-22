import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products=[];
  cart=[];
  view:boolean=true;
  public removecart(v)
  {

  }
  public addtocart(v)
  {
  this.cart.push(v);
  }
  public show(){
    this.view=true;
  }
  public hide()
  {
    this.view=false;
  }
  constructor() {
    this.products=[{name:"printer",price:"4534",company:"nvdsnv"},{name:"scanner",price:"64545",company:"fghfgn"},{name:"keyboard",price:"45645",company:"vbfvb"}]
   }
  
  ngOnInit() {
  }

}
