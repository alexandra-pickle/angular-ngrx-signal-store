import { Component, inject } from '@angular/core';
import { ProductStore } from '../state/product.store';
import { FormControl, FormGroup } from '@angular/forms';
import { Guid } from 'guid-typescript';
import { Product } from './product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.scss',
})
export class ProductCreateComponent {
  readonly store = inject(ProductStore);

  productForm = new FormGroup({
    id: new FormControl(Guid.create().toString()),
    title: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
  });

  onSubmit() {
    this.store.addNewProduct(this.productForm.value as Product);
    this.productForm.reset();
  }
}
