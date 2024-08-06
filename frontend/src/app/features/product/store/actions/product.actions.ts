import { Product } from '@core/models';

export class LoadProducts {
  static readonly type = '[Products] LoadProducts';
}

export class SaveProduct {
  static readonly type = '[Products] SaveProduct';

  constructor(public product: Product) {}
}
