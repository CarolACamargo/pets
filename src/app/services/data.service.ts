import { Injectable } from "@angular/core"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Product } from "../models/product.model";

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public url = 'http://localhost:3000/v1';
    constructor(private http: HttpClient) {}

    getProducts(){
        // return this.http.get<Product[]>('http://localhost:3000/v1/products');
        return [
            new Product(
                '',
                'CAMA PARA CACHORRO M1',
                '',
                '',
                50,
                ['https://cdn.dooca.store/1679/products/bartho-verde-c.png?v=1606957130']),
            
            new Product(
                '',
                'RAÇÃO GOLDEN FORMULA',
                '',
                '',
                150,
                ['https://www.petlove.com.br/images/products/223476/large/Ra%C3%A7%C3%A3o_Premier_Golden_Formula_Carne_e_Arroz_para_C%C3%A3es_Adultos_3108211-1_3KG.jpg?1627716123']),

            new Product(
                '',
                'KIT BANHO DOG SANOL',
                '',
                '',
                35,
                ['https://http2.mlstatic.com/D_NQ_NP_678180-MLB41713218628_052020-O.jpg']),
        ];
    }

    public composeHeaders(){
    const token = localStorage.getItem('petshop.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
    }

    authenticate(data: any){
        return this.http.post(`${this.url}/accounts/authenticate`, data);
    }

    refreshToken(){
        return this.http.post(`${this.url}/accounts/authenticate`, 
            null,
            {headers: this.composeHeaders() }
        );
    }
}