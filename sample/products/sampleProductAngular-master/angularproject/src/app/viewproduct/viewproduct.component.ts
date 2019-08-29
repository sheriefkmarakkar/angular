import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
import { MessageService } from '../message.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {

  constructor(private ms: MessageService,private r : Router,private ac:ActivatedRoute) {  }

  sdata;
 id;
  
  edit()
  {

  }
  ngOnInit() {
    this.ms.getData().subscribe(data=>{
      this.sdata = data;
    })
  }
 

}
