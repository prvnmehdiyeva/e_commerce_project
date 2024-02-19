import { Injectable } from '@angular/core';
import { Productcard } from '../models/productcard';
import { CardserviceService } from './cardservice.service';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasketserviceService {
  public product: Productcard[] = [];
  private basketSubject = new BehaviorSubject<Productcard[]>([])
      public itemCount:number=0
      public total:number=0
      totalQuantity:number = 0;
      totalPrice:number = 0;

  constructor(private cartService:CardserviceService){}

  getBasket():Observable<Productcard[]> {
    console.log("🚀 ~ BasketserviceService ~ getBasket ~ this.product:", this.product)
    return of (this.product); 
  }

  addToBasket(product: Productcard, quantity: number = 1) {
    let item = this.product.find(i => i.id === product.id);
    if (item) {
      item.quantity += quantity;
    } else {
      const newItem = { ...product, quantity };
      this.product.push(newItem);
      this.basketSubject.next([...this.product])
    }
    this.calculate()
}
removeFromCart(productId: number) {
  
  console.log('Removing id:', productId); 
  this.product = this.product.filter(item => item.id !== productId);
  console.log('Updated:', this.product);
  this.calculate()
}

calculate(){
  this.totalQuantity = 0;
  this.totalPrice = 0;
  this.totalQuantity = this.product.reduce((total, item) => total + item.quantity, 0);
  this.totalPrice = this.product.reduce((total, item) => total + (item.quantity * item.price), 0);
}
}
