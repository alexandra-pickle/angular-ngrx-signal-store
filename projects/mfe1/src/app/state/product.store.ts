import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ProductService } from '../mfe1/product.service';
import { Product } from '../mfe1/product.model';

export const ProductStore = signalStore(
  { providedIn: 'root' },
  withState({ products: new Array<Product>() }),
  withMethods((state) => {
    const productService = inject(ProductService);

    return {
      removeProduct: (prductId: string) => {
        patchState(state, {
          products: state.products().filter((x) => x.id !== prductId),
        });
      },
      load: () => {
        return productService.getProducts().subscribe((response: Product[]) => {
          patchState(state, { products: response });
        });
      },
      addNewProduct: (product: Product) => {
        patchState(state, {
          products: [...state.products(), product],
        });
      },
    };
  })
);
