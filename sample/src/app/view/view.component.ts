import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  name:String;
  age:number;
  hobbies=[];
  // or hobbies:[]
  //or hobbies:
  project=[];
  constructor() { 
    this.name="Sherief"
    this.age=24;
    this.hobbies=["sherief","km"];
    this.project=[{name:"sherief",duration:"34",enddate:"zxczxc"},{name:"sdfv",duration:"xzc",enddate:"xzc"},{name:"egfd",duration:" gfdsf",enddate:"dgb"}]
  }
  public add(){
    let data={name:"sdkfsd",duration:"asdsd",enddate:"dfkjvdfbv"};
    this.project.push(data);
  }
  ngOnInit() {
  }

}
