import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@core/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  http: HttpClient = inject(HttpClient);

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/api/products');
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/api/products', product);
  }
}
