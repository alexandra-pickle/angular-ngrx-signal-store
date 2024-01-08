import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ToDo } from '../mfe2/todo.model';
import { ToDoService } from '../mfe2/todo.service';
import { catchError, of } from 'rxjs';

export const ToDoStore = signalStore(
  { providedIn: 'root' },
  withState({ todos: new Array<ToDo>(), isLoading: false }),
  withMethods((state) => {
    const toDoService = inject(ToDoService);

    return {
      load: () => {
        patchState(state, { isLoading: true });
        return toDoService
          .getToDos()
          .pipe(
            catchError((err) => {
              patchState(state, { isLoading: false });
              return of([]);
            })
          )
          .subscribe((response: ToDo[]) => {
            patchState(state, { todos: response, isLoading: false });
          });
      },
      removeToDo: (toDoId: number) => {
        patchState(state, {
          todos: state.todos().filter((x) => x.id !== toDoId),
        });
      },
      markComplete: (toDoId: number) => {
        patchState(state, {
          todos: state
            .todos()
            .map((todo) =>
              todo.id == toDoId ? { ...todo, completed: true } : todo
            ),
        });
      },
    };
  })
);
