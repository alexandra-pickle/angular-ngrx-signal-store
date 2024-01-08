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
import { EMPTY, catchError } from 'rxjs';

//  signalStore is  function provides Signal store which is basically a service providing Signals

export const ProductStore = signalStore(
  //  We get a class which is a service, and this class can be provided in root or at component level,
  //  at routing level, or when bootstrapping the application
  { providedIn: 'root' },
  withState({ products: new Array<Product>(), isLoading: false }),
  withComputed((state) => {
    return { products: state.products, isLoading: state.isLoading };
  }),
  withMethods((state) => {
    const productService = inject(ProductService);

    return {
      load: () => {
        patchState(state, { isLoading: true });
        return productService
          .getProducts()
          .pipe(
            catchError((err) => {
              patchState(state, { isLiading: false });
              return EMPTY;
            })
          )
          .subscribe((response: Product[]) => {
            patchState(state, { products: response, isLoading: false });
          });
      },
      removeProduct: (prductId: string) => {
        patchState(state, {
          products: state.products().filter((x) => x.id !== prductId),
        });
      },
      addNewProduct: (product: Product) => {
        patchState(state, {
          products: [...state.products(), product],
        });
      },
    };
  }),
  withHooks({ onInit(store) {} })
);
