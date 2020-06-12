import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageComponent } from './landing-page-component.component';

import { RouterModule} from '@angular/router';
import { MainRoutes } from '../Routes/ecomApp.MainRoutes';

@NgModule({
  imports: [
    CommonModule, BrowserModule,
    RouterModule.forRoot(MainRoutes)
  ],
  declarations: [],
  bootstrap: [LandingPageComponent],
  exports: [
    RouterModule
  ],
})
export class LandingPageModule { }
