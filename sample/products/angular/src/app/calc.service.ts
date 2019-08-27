import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalcService {
  public add(){
    return 1+2;
  }
  
  public addvalue1(a,b){
    return a+b;
  }
  ret(x){
    return "welcome "+x.name;
  }
  ret1(x){
    return x;
  }


  constructor() { }
}
