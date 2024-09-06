import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiUrl=environment.apiUrl+"/cart";

  constructor(private http:HttpClient) { }

  //METODO PER AGGIUNGERE AL CARRELLO
  addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiUrl,product);
  }

  //METODO PER VEDERE GLI ELEMENTI AGGIUNTI NEL CARRELLO
  getCartItems():Observable<Product[]>{
  return this.http.get<Product[]>(this.apiUrl);
  }

  //METODO PER CANCELLARE UN ELEMENTO DAL CARRELLO(richiesta di cancellazione al server)
  clearCart():Observable<void>{
    return this.http.delete<void>(this.apiUrl);
  }
}
