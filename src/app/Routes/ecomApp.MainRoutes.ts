import { HomePageComponent } from '../Home/homepagecomponent.view';

export const MainRoutes = [
    {path: 'Home', component: HomePageComponent},
    {path: 'Clothes', loadChildren: () => import('../Products/clothes/ecomapp.clothes.module').then(m => m.ClothesModule)},
    {path: 'Furniture', loadChildren: () => import('../Products/furniture/ecomapp.furniture.module').then(m => m.FurnitureModule)},
    {path: 'Electronics', loadChildren: () => import('../Products/electronics/ecomapp.electronics.module').then(m => m.ElectronicsModule)},
    {path: '', redirectTo: '/Home', pathMatch: 'full'}
] 