import { inject, Injectable } from '@angular/core';
import { PRODUCT_STATE_NAME } from '../state.name';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { LoadProducts, SaveProduct } from '../actions/product.actions';
import { ProductService } from '../../services/product.service';
import { take, tap } from 'rxjs';
import { Product } from '@core/models';

export interface ProductStateModel {
  products: Product[];
}

@State<ProductStateModel>({
  name: PRODUCT_STATE_NAME,
  defaults: {
    products: [],
  },
})
@Injectable()
export class ProductState {
  productService: ProductService = inject(ProductService);

  @Selector()
  static productList(state: ProductStateModel): Product[] {
    return state.products;
  }

  @Action(LoadProducts)
  loadProducts({ patchState }: StateContext<ProductStateModel>) {
    this.productService
      .loadProducts()
      .pipe(
        take(1),
        tap((products) => {
          patchState({
            products,
          });
        })
      )
      .subscribe();
  }
  @Action(SaveProduct)
  saveProduct(
    { getState, patchState }: StateContext<ProductStateModel>,
    { product }: SaveProduct
  ) {
    this.productService
      .saveProduct(product)
      .pipe(
        take(1),
        tap((result) => {
          patchState({
            products: [result, ...getState().products],
          });
        })
      )
      .subscribe();
  }
}
