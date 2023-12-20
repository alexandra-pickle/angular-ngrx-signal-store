import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Mfe1Component } from './mfe1/mfe1.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./mfe1/mfe1.module').then((m) => m.Mfe1Module),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
