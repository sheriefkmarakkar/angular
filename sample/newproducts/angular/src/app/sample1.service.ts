import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class Sample1Service {

  constructor(private h: HttpClient) { }
    getData(){
      let url="localhost:8080";
      return this.h.get(url);
    }

  }

