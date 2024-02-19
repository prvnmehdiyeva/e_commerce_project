import { Component, Input, OnInit } from '@angular/core';
import { Categorycard } from '../../models/categorycard';
import { CardserviceService } from '../../services/cardservice.service';
import { Productcard } from '../../models/productcard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent{
  @Input() public product!: Productcard[];

  constructor( private cardService:CardserviceService ){}
  
}
