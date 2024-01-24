import { createAction, props } from '@ngrx/store';

export const emptyLoginForm = createAction('[Auth] Empty Login Form');

export const loginUser = createAction(
  '[Auth] Login User');

export const loginUserSuccess = createAction('[Auth] Login User Success');
export const loginUserError = createAction(
  '[Auth] Login User Error',
  props<{ error: any }>()
);

export const registerUser = createAction(
  '[Auth] Register User');
export const registerUserSuccess = createAction('[Auth] Register User Success');
export const registerUserError = createAction(
  '[Auth] Register User Error',
  props<{ error: any }>()
);

export const updateRegisterUser = createAction(
  '[Auth] Update Register User',
  props<{ value: any }>()
);
export const updateRegisterUserSuccess = createAction(
  '[Auth] Update Register User Success'
);
export const updateRegisterUserError = createAction(
  '[Auth] Update Register User Error',
  props<{ error: any }>()
);



export const updateLoginUser = createAction(
  '[Auth] Update Login User',
  props<{ value: any }>()
);
export const updateLoginUserSuccess = createAction(
  '[Auth] Update Login User Success'
);
export const updateLoginUserError = createAction(
  '[Auth] Update Login User Error',
  props<{ error: any }>()
);