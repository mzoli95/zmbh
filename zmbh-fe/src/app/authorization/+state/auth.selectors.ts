import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FORM_FEATURE_KEY, AuthFormState } from './auth.reducer';

export const selectAuthFeature = createFeatureSelector<AuthFormState>(AUTH_FORM_FEATURE_KEY)


export const selectLoginInitState = createSelector(
    selectAuthFeature,
  (state: AuthFormState) => state.auth.loginForm
);