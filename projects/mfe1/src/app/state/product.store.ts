import { inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ProductService } from '../mfe1/product.service';
import { Product } from '../mfe1/product.model';

//  signalStore is  function provides Signal store which is basically a service providing Signals

export const ProductStore = signalStore(
  //  We get a class which is a service, and this class can be provided in root or at component level,
  //  at routing level, or when bootstrapping the application
  { providedIn: 'root' },
  withState({ products: new Array<Product>() }),
  withComputed((state) => {
    return { products: state.products };
  }),
  withHooks({ onInit(store) {} }),
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
