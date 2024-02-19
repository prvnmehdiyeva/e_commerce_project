import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductbasketComponent } from './productbasket.component';

describe('ProductbasketComponent', () => {
  let component: ProductbasketComponent;
  let fixture: ComponentFixture<ProductbasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductbasketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductbasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
