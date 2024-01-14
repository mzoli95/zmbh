import { createAction, props } from '@ngrx/store';
import { UpdatesState } from './update.reducer';

export const postUpdatesForm = createAction(
  '[Updates] Post Updates Form'
);

export const postUpdatesFormSuccess = createAction(
    '[Updates] Post Updates Form Success'
  );
  export const postUpdatesFormError = createAction(
    '[Updates] Post Updates Form Error', props<{error:any}>()
  );
  
  export const updateUpdatesFormField = createAction(
    '[Updates] Update Updates Form',
    props<{value: Partial<UpdatesState>, isValidForm: boolean}>()
  );
  
  export const isEdit = createAction(
    '[Updates] Set Edit',
    props<{isEdit: boolean}>()
  )
  export const isValid = createAction(
    '[Updates] Set Form Valid',
    props<{isValid: boolean}>()
  )