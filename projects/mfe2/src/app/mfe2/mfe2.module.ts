import { NgModule } from '@angular/core';
import { ToDoListComponent } from './todo-list.component';
import { Mfe2RoutingModule } from './mfe2-routing.module';
import { ToDoService } from './todo.service';
import { ToDoStore } from '../state/todo.store';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ShellStore } from 'projects/shell/src/app/shell.store';
import { SpinnerComponent } from 'projects/shell/src/app/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    Mfe2RoutingModule,
    SpinnerComponent,
  ],
  declarations: [ToDoListComponent],
  providers: [ToDoService, ToDoStore, ShellStore],
})
export class Mfe2Module {}
