import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  name: String;
  age: Number;
  email: String;
  address;
  hobbies : String[];
  projects : any[]=[];  //initialize with null array always for database
  constructor() { 
    this.name ="Cristina";
    this.age = 22;
    this.email = "cris@gmail.com";
    this.address = {
      houseNo : "ABC",
      street : "abc",
      dist : "ekm"
    };
    this.hobbies = ["reading", "listening to music"];
    this.projects = [
    {
      name : "Project1",
      duration : "5 weeks",
      endDate : "30/10/19"
    },
    {
      name : "Project2",
      duration : "10 weeks",
      endDate : "25/12/19"
    }];
  }

  ngOnInit() {
  }

  addProject(){
    let data = 
      {
        name : "Project1",
        duration : "5 weeks",
        endDate : "30/10/19"
      };
    this.projects.push(data);
  }
}
