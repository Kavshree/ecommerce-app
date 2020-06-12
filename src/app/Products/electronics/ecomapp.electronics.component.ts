import { Component, OnInit } from '@angular/core';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

@Component({
  selector: 'electronics-component',
  template: `<div class="container">
  <breadcrumb-component [activeCrumb]="currActiveBreadCrumb"></breadcrumb-component>
  <prod-list [prodListArr]="electronicsData"></prod-list>
</div>`,
})

export class ElectronicsComponent implements OnInit {
  public electronicsData = [];
  public currActiveBreadCrumb = ["products","electronics"]
  constructor(private _clothService : ProdClothesService) { }

  ngOnInit() {
    this._clothService.fetchElectronics().subscribe(response => {
      this.electronicsData = response; 
    });

  }

}