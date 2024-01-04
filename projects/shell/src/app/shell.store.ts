import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const ShellStore = signalStore(
  { providedIn: 'root' },
  withState({ pageTitle: '' }),
  withMethods((state) => {
    return {
      updatePageTitle: (newTitle: string) => {
        patchState(state, {
          pageTitle: newTitle,
        });
      },
    };
  })
);
