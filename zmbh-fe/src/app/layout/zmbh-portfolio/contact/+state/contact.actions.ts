import { createAction, props } from '@ngrx/store';
import { ContactState } from './contact.reducer';

export const updateContactFormField = createAction(
  '[Contact] Update Contact Form Field',
  props<{ value: Partial<ContactState> }>()
);

export const submitEmail = createAction('[Contact] Submit Email');
export const submitEmailSuccess = createAction(
  '[Contact] Submit Email Success',
  props<{ success: any }>()
);
export const submitEmailError = createAction(
  '[Contact] Submit Email Error',
  props<{ error: any }>()
);
export const error = createAction('[Contact] Error');
