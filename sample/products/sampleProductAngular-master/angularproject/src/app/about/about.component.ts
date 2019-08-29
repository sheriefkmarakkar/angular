import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
company;
loc;
  constructor(private a:ActivatedRoute) { }

  ngOnInit() {
    this.company=this.a.snapshot.paramMap.get("cname")
    }

}
