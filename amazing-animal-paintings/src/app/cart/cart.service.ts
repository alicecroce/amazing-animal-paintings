import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'app/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private apiCartUrl=environment.apiUrl+"/cart";//api per il carrello
  private apiCheckoutUrl=environment.apiUrl+"/checkout";//api per il checkout


  constructor(private http:HttpClient) { }

  //METODO PER AGGIUNGERE AL CARRELLO
  addToCart(product:Product):Observable<Product>{
    return this.http.post<Product>(this.apiCartUrl,product);
  }

  //METODO PER VEDERE GLI ELEMENTI AGGIUNTI NEL CARRELLO
  getCartItems():Observable<Product[]>{
  return this.http.get<Product[]>(this.apiCartUrl);
  }

  //METODO PER CANCELLARE UN ELEMENTO DAL CARRELLO(richiesta di cancellazione al server)
  clearCart():Observable<void>{
    return this.http.delete<void>(this.apiCartUrl);
  }

  //METODO PER IL CHECKOUT DEI PRODOTTI (QUINDI è UN POST, CHE HO CREATO SU MOCKOON)
checkout(products: Product[]):Observable<void>{
  return this.http.post<void>(this.apiCheckoutUrl, products);//stiamo inviando materiale, ma non riceviamo nulla in cambio (void)
}
}
