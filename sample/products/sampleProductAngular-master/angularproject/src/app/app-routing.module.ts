import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { DataComponent } from './data/data.component';
import {LoginComponent} from './login/login.component'
import { HomeComponent } from './home/home.component';


const routes: Routes = [ { path:"", component : LoginComponent} ,
{path:"home",component:HomeComponent,children:[
  { path : "new", component : AddproductComponent},
  { path : "edit", component : EditproductComponent},
  { path : "view", component : ViewproductComponent},
  { path : "delete", component : DeleteproductComponent},
  { path : "contact", component : ContactComponent},
  { path : "about/:cname/:loc", component : AboutComponent},
  { path : "service", component : DataComponent},
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
