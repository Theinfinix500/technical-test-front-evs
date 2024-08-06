import { inject, Injectable } from '@angular/core';
import { Product } from '@core/models';
import { Store } from '@ngxs/store';
import { LoadProducts, SaveProduct } from '@store/actions';
import { ProductState } from '@store/state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductFacadeService {
  store: Store = inject(Store);
  products$: Observable<Product[]> = this.store.select(
    ProductState.productList
  );

  loadProduct() {
    this.store.dispatch(LoadProducts);
  }

  saveProduct(product: Product) {
    this.store.dispatch(new SaveProduct(product));
  }
}
