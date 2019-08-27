import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
//router
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';

import { CalcService} from './calc.service'
import {Sample1Service} from './sample1.service'
import { DataComponent } from './data/data.component';
import {HttpClientModule} from '@angular/common/http'
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { HeaderComponent } from './header/header.component';
import { Data1Component } from './data1/data1.component';

const approutes : Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"calculator", component:CalculatorComponent},
  {path:"cart", component:CartComponent},
  {path:"services", component:Data1Component}
]

@NgModule({
  declarations: [
    AppComponent,
    DataComponent,
    ViewComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    CalculatorComponent,
    HeaderComponent,
    Data1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  
    
    //specifies router for root
    RouterModule.forRoot(approutes)
  ],
  providers: [CalcService,Sample1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
