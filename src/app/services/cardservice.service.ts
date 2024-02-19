import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Productcard } from '../models/productcard';
import { Categorycard } from '../models/categorycard';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  mainUrl:string = "https://fakestoreapi.com/"
  filteredCards!: Productcard[];
  product!: Productcard[];
  constructor(private http:HttpClient) { }
  getProducts():Observable<Productcard[]>{
    return this.http.get<Productcard[]>(this.mainUrl + "products")
    .pipe(
      tap(products => {
        this.product = products;
        this.filteredCards = products;
      })
    );
  }
  getCategories():Observable<Categorycard[]>{
    return this.http.get<Categorycard[]>(this.mainUrl + "products" +'/categories')
  }
}
