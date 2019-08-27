import { Component, OnInit } from '@angular/core';
import {CalcService} from '../calc.service'
import {Sample1Service} from '../sample1.service'
import { SamplService } from '../sampl.service';
@Component({
  selector: 'app-data1',
  templateUrl: './data1.component.html',
  styleUrls: ['./data1.component.css']
})
export class Data1Component implements OnInit {
 val:number;
 n1;
 n2;
 x={name:"sherief"}
 result1;
 result;
 m;



  constructor(private ds:CalcService,private ss: Sample1Service) { }

  ngOnInit() {
   
    this.val=this.ds.add()
    
    console.log(this.val)
  }

  public addvalue(){
    this.val=this.ds.addvalue1(parseInt(this.n1),parseInt(this.n2))
  }
  public message()
  {
    this.result=this.ds.ret(this.x)
  }
 Show1(){
      this.ss.getData().subscribe(data=>{
        this.m=data;
        console.log(data);
      })
    }
  public message1()
  {
    this.result1=this.ds.ret1(this.x)
  }
  

}
