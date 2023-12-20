import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { ToDo } from '../mfe2/todo.model';
import { ToDoService } from '../mfe2/todo.service';

export const ToDoStore = signalStore(
  { providedIn: 'root' },
  withState({ todos: new Array<ToDo>() }),
  withMethods((state) => {
    const toDoService = inject(ToDoService);

    return {
      removeToDo: (toDoId: number) => {
        patchState(state, {
          todos: state.todos().filter((x) => x.id !== toDoId),
        });
      },
      load: () => {
        return toDoService.getToDos().subscribe((response: ToDo[]) => {
          patchState(state, { todos: response });
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
