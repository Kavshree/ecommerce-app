import { Component, OnInit } from '@angular/core';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

@Component({
  selector: 'furniture-component',
  template: `<div class="container">
  <breadcrumb-component [activeCrumb]="currActiveBreadCrumb"></breadcrumb-component>
  <prod-list [prodListArr]="furnitureData"></prod-list>
</div>`,
})

export class FurnitureComponent implements OnInit {
  public furnitureData = [];
  public currActiveBreadCrumb = ["products","furniture"]
  constructor(private _clothService : ProdClothesService) { }

  ngOnInit() {
    this._clothService.fetchFurniture().subscribe(response => {
      this.furnitureData = response; 
    });

  }

}