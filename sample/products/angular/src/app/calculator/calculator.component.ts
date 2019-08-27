import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  number1;
  number2;
  result;
  mark;
  view:Boolean=true;
  passed:Boolean=false;
  failed:Boolean=false;
  constructor() { }

  ngOnInit() {
  }

  add(){
    this.result = this.number1+this.number2;
  }

  diff(){
    this.result = this.number1-this.number2;
  }

  resultDisplay(){
    
  }
}
