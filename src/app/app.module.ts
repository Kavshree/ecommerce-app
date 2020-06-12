import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from "@angular/common";
import { MainRoutes } from './Routes/ecomApp.MainRoutes';
import { LandingPageComponent } from './Home/landing-page-component.component'
//import { SharedModule } from './Utilities/reuseable/ecom.sharedModule.module'

@NgModule({
  imports: [
    BrowserModule,CommonModule,HttpClientModule,
    RouterModule.forRoot(MainRoutes)
    ],
  declarations: [LandingPageComponent],
  providers: [],
  bootstrap: [LandingPageComponent]
})
export class AppModule { }
