import { Component, OnInit } from '@angular/core';
import { Productcard } from '../models/productcard';
import { Categorycard } from '../models/categorycard';
import { CardserviceService } from '../services/cardservice.service';
import { BasketserviceService } from '../services/basketservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public product: Productcard[] = [];
  public category: Categorycard[] = [];
  selectedCategory: any | null = null;
  filteredProducts: Productcard[] = [];
  searchText: string = '';
  noResultsFound: boolean = false;

  constructor(private cardService: CardserviceService,private basketService:BasketserviceService) {}

  ngOnInit(): void {
    this.loadProducts();
    this.cardService.getCategories().subscribe(categories => {
      this.category = categories;
    });
  }

  loadProducts() {
    this.cardService.getProducts().subscribe(products => {
      this.product = products;
      this.filteredProducts = products;
      this.selectedCategory = null;
    });
  }

  changeCategory(c: any) {
    this.selectedCategory = c;
    if (!c) {
      this.filteredProducts = this.product; 
    } else {
      this.filteredProducts = this.product.filter(p => p.category === c); 
    }
  }
  searchButtonClicked() {
    if(this.searchText.trim() ===''){
      this.filteredProducts = this.product;
      this.noResultsFound=false
    }else{
      this.filteredProducts = this.product.filter(p =>
        p.title.toLowerCase().includes(this.searchText.toLowerCase())
      ); 
      this.noResultsFound = this.filteredProducts.length === 0;
    }
  }
  showAllProducts() {
    this.searchText = ''; 
    this.filteredProducts = this.product; 
    this.noResultsFound = false; 
  }
  addToBasket(product: Productcard) {
    this.basketService.addToBasket(product);
    console.log(product);
}
}
