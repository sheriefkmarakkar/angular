import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from'@angular/router';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ms: MessageService,private r : Router) {  }

  sdata;
  ngOnInit() {
    this.ms.getData().subscribe(data=>{
      this.sdata = data;
    })
  }
 

}
