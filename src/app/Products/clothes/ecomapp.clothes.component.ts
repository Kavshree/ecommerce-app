import { Component, OnInit } from '@angular/core';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

@Component({
  selector: 'clothes-component',
  template: `
  <div class="container">
    <breadcrumb-component [activeCrumb]="currActiveBreadCrumb"></breadcrumb-component>
    <prod-list [prodListArr]="clothesData"></prod-list>
  </div>`,
  styleUrls: ['../../Utilities/common/css/ecomStyles.css']
})
export class ClothesComponent implements OnInit {
  public clothesData = [];
  public currActiveBreadCrumb = ["products","clothes"]
  constructor(private _clothService : ProdClothesService) { }

  ngOnInit() {
    this._clothService.fetchClothes().subscribe(response => {
      this.clothesData = response; 
    });

  }

}