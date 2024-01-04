import { Component, inject } from '@angular/core';
import { ToDoStore } from '../state/todo.store';
import { ShellStore } from 'projects/shell/src/app/shell.store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class ToDoListComponent {
  readonly store = inject(ToDoStore);
  readonly shellStore = inject(ShellStore);

  ngOnInit(): void {
    this.shellStore.updatePageTitle('Page title: Mfe 2');
    this.store.load();
  }
}
