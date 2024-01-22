import { createAction, props } from '@ngrx/store';
import { UpdatesState } from './update.reducer';

export const postUpdatesForm = createAction('[Updates] Post Updates Form');

export const postUpdatesFormSuccess = createAction(
  '[Updates] Post Updates Form Success'
);
export const postUpdatesFormError = createAction(
  '[Updates] Post Updates Form Error',
  props<{ error: any }>()
);

export const updateUpdatesFormField = createAction(
  '[Updates] Update Updates Form',
  props<{ value: Partial<UpdatesState>; isValidForm: boolean }>()
);

export const isEdit = createAction(
  '[Updates] Set Edit',
  props<{ isEdit: boolean }>()
);
export const isValid = createAction(
  '[Updates] Set Form Valid',
  props<{ isValid: boolean }>()
);

export const getUpdateArray = createAction('[Updates] Get Update Array');
export const getUpdateArraySuccess = createAction(
  '[Updates] Get Update Array Success'
);
export const getUpdateArrayError = createAction(
  '[Updates] Get Update Array Error'
);
export const loadUpdateArray = createAction(
  '[Updates] Load Update Array',
  props<{ data: any }>()
);

export const deleteByIdFromDb = createAction(
  '[Updates] Delete By Id',
  props<{ id: string }>()
);

export const deleteByIdFromDbSuccess = createAction(
  '[Updates] Delete By Id Success'
);
export const deleteByIdFromDbError = createAction(
  '[Updates] Delete By Id Error',
  props<{ error: any }>()
);
