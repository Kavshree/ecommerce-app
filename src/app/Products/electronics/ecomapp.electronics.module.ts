import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../Utilities/reuseable/ecom.sharedModule.module'
import { HttpClientModule }    from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { ElectronicsRoutes } from '../../Routes/ecomApp.ElectronicsRoutes';
import { ProdClothesService } from '../../Utilities/services/ecomapp.clothes.Service'

/**Import all products related components */
import { ElectronicsComponent } from './ecomapp.electronics.component'


@NgModule({
  imports: [
    CommonModule,SharedModule,HttpClientModule,
    RouterModule.forChild(ElectronicsRoutes)
  ],
  declarations: [ElectronicsComponent],
  bootstrap: [ElectronicsComponent],
  providers: [ProdClothesService]
})
export class ElectronicsModule { }
