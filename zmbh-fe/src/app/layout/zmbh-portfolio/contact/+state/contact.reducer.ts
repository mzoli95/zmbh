import { createReducer, on } from '@ngrx/store';
import * as ContactFormActions from './contact.actions';

export const CONTACT_FORM_FEATURE_KEY = 'contact-us';

export interface ContactFormState {
    contactForm:{
        name: string;
        email: string;
        message: string;
    }
}

export const contactFormInitialState: ContactFormState = {
    contactForm:{
        name: '',
        email: '',
        message: ''
    }
};

export const contactFormReducer = createReducer(
  contactFormInitialState,
  on(ContactFormActions.updateContactFormField, (state, {  value }):ContactFormState => ({
    ...state,
    contactForm: value
  }))
);
