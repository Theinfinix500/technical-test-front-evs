import { Component, inject, OnInit } from '@angular/core';
import { ProductFacadeService } from '@store/facade';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '@core/models';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss',
})
export class ProductFormComponent implements OnInit {
  productFacade: ProductFacadeService = inject(ProductFacadeService);
  productForm!: FormGroup;
  fb: FormBuilder = inject(FormBuilder);

  ngOnInit(): void {
    this.productForm = this.fb.group({
      title: '',
      description: '',
      brand: '',
      price: 0,
    });
  }

  onSubmit() {
    const { value: product, valid: isProductValid } = this.productForm;

    if (!isProductValid) return;

    this.productFacade.saveProduct(product as Product);
  }
}
