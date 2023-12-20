import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { ProductCreateComponent } from './product-create.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    children: [
      {
        path: 'create',
        component: ProductCreateComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Mfe1RoutingModule {}
