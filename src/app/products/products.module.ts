import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProductsearchComponent } from './productsearch/productsearch.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { MatFormFieldControl } from '@angular/material/form-field';
import { ProductbasketComponent } from './productbasket/productbasket.component';
import {MatDividerModule} from '@angular/material/divider';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsearchComponent,
    ProductbasketComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatChipsModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatFormField,
    MatDividerModule
    
  ],
  exports: [
    ProductsComponent
  ]
})
export class ProductsModule { }
