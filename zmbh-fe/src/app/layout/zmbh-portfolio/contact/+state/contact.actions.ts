import { createAction, props } from '@ngrx/store';

export const updateContactFormField = createAction(
  '[Contact] Update Contact Form Field',
  props<{ value: any }>()
);

export const submitEmail = createAction(
  '[Contact] Submit Email'
);
export const submitEmailSuccess = createAction(
    '[Contact] Submit Email Success'
  );
  export const submitEmailError = createAction(
    '[Contact] Submit Email Error',
    props<{ error: any }>()
  );

//   TODO: Majd kiszervezni
  export const redirectToSuccess = createAction(
    '[Redirect] Redirect Success'
  );
  