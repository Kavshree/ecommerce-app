import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ProdListViewTemplateComponent } from './prodListView.reuseable.component'
import {BreadcrumbComponent} from './ecomapp.breadcrumb';
@NgModule({
  imports: [CommonModule],
  declarations: [ProdListViewTemplateComponent, BreadcrumbComponent],
  providers: [],
  exports: [ProdListViewTemplateComponent,BreadcrumbComponent]
})
export class SharedModule { }