import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule} from '@angular/router';
import { FurnitureRoutes } from '../../Routes/ecomApp.FurnitureRoutes';
import { SharedModule} from '../../Utilities/reuseable/ecom.sharedModule.module'
import { HttpClientModule }    from '@angular/common/http';
/**Import all products related components */
import { FurnitureComponent } from './ecomapp.furniture.component';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'


@NgModule({
  imports: [
    CommonModule,HttpClientModule,SharedModule,
    RouterModule.forChild(FurnitureRoutes)
  ],
  declarations: [FurnitureComponent],
  bootstrap: [FurnitureComponent],
  providers: [ProdClothesService]
})
export class FurnitureModule { }
