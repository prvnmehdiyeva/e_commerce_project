import { Component, OnInit } from '@angular/core';
import { BasketserviceService } from '../../services/basketservice.service';
import { Productcard } from '../../models/productcard';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-productbasket',
  templateUrl: './productbasket.component.html',
  styleUrl: './productbasket.component.scss'
})
export class ProductbasketComponent implements OnInit {
  public product: Productcard[] = [];


  constructor(public basketService: BasketserviceService,private dialog: MatDialog){}
  ngOnInit(): void {
      this.loadBasket()
}
loadBasket(): void {
  this.basketService.getBasket().subscribe((items: Productcard[]) => {
    this.product = items;
  });
}
removeFromCart(productId: number) {
  const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
    position: { top: '-200%', left: '70%' },
    panelClass: 'custom-dialog-container' 
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      this.basketService.removeFromCart(productId);
      this.loadBasket();
    }
  });
}

}
