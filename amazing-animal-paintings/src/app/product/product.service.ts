import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

private apiUrl = environment.apiUrl + "/products";//invio una richieta alla fake api per vedere tutti i prodotti

  constructor(private http:HttpClient) { }

    getProducts():Observable<Product[]>{
      return this.http.get<Product[]>(this.apiUrl);
    }
  
}
