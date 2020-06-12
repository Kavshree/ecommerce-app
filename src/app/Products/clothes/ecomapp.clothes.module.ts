import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../Utilities/reuseable/ecom.sharedModule.module'
import { RouterModule} from '@angular/router';
import { ClothesRoutes } from '../../Routes/ecomApp.ClothesRoutes';
//import { ProdListViewTemplateComponent } from '../../Utilities/reuseable/prodListView.reuseable.component'

/**Import all products related components */
import { ClothesComponent } from './ecomapp.clothes.component'
import { HttpClientModule }    from '@angular/common/http';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

@NgModule({
  imports: [
    CommonModule,HttpClientModule,SharedModule,
    RouterModule.forChild(ClothesRoutes)
  ],
  declarations: [ClothesComponent],
  bootstrap: [ClothesComponent],
  providers: [ProdClothesService]
})
export class ClothesModule { }
