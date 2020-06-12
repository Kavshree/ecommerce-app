import { iProduct } from '../products.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ClothesModule } from '../../Products/clothes/ecomapp.clothes.module'

@Injectable()

export class ProdClothesService{
    constructor(private httpClient: HttpClient) { };
    
    fetchClothes() : Observable<iProduct[]> {
        return this.httpClient.get<iProduct[]>(`http://localhost:3000/clothes`);
    }

    fetchElectronics() : Observable<iProduct[]> {
        return this.httpClient.get<iProduct[]>(`http://localhost:3000/electronics`);
    }

    fetchFurniture() : Observable<iProduct[]> {
        return this.httpClient.get<iProduct[]>(`http://localhost:3000/furniture`);
    }
}