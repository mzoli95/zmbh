import { createFeatureSelector, createSelector } from '@ngrx/store';
import {  CONTACT_FORM_FEATURE_KEY, ContactFormState } from './contact.reducer';

export const selectContactFeature = createFeatureSelector<ContactFormState>(CONTACT_FORM_FEATURE_KEY)


export const selectEmail = createSelector(
    selectContactFeature,
  (state: ContactFormState) => state.contactForm
);