import { Component } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { ProductsComponent } from '../products.component';

@Component({
  selector: 'app-productsearch',
  templateUrl: './productsearch.component.html',
  styleUrl: './productsearch.component.scss'
})
export class ProductsearchComponent {
  searchText: string = '';
  constructor(private cardService:CardserviceService,
    private cards: ProductsComponent){}
    search(searchText:string) {
      this.cardService.filteredCards = this.cardService.product.filter(p =>
        p.title.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
    
}
