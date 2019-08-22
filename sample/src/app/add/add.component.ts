import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  n1:number;
  n2:number;
  result;
  constructor() { }

  ngOnInit() {
  }
  public add()
  {
  this.result=this.n1+this.n2;

  }
  public diff()
  {
    this.result=this.n1-this.n2;
  }

}
