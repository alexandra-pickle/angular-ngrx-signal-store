import { NgModule } from '@angular/core';
import { Mfe1RoutingModule } from './mfe1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProductStore } from '../state/product.store';
import { ProductService } from './product.service';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShellStore } from 'projects/shell/src/app/shell.store';
import { SpinnerComponent } from 'projects/shell/src/app/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    Mfe1RoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  declarations: [ProductListComponent, ProductCreateComponent],
  providers: [ProductService, ProductStore, ShellStore],
})
export class Mfe1Module {}
