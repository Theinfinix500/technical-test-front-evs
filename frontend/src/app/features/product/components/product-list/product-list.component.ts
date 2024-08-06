import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '@core/models';
import { ProductFacadeService } from '@store/facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe, ProductCardComponent, JsonPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit {
  productFacade: ProductFacadeService = inject(ProductFacadeService);
  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productFacade.products$;
    this.productFacade.loadProduct();
  }
}
