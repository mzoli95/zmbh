import { createReducer, on } from '@ngrx/store';
import * as UpdateActions from './update.actions';

export const UPDATES_FEATURE_KEY = 'updates';

export interface CommentsState {
  name: string;
  date: Date;
  commentText: string;
}

export interface UpdatesState {
  updateId: string;
  title: string;
  date: Date;
  postedBy: string;
  content: string;
  comments?: CommentsState[] | undefined;
}

//TODO remove updatesFormArray, we don't need it right here
export interface UpdatesFormState {
  updatesFormArray?: UpdatesState[];
  isFormValid: boolean;
  isEdit: boolean;
  currentUpdatesForm: UpdatesState;
}

export const updatesFormInitialState: UpdatesFormState = {
  updatesFormArray: [],
  currentUpdatesForm: {
    updateId: '',
    content: '',
    date: new Date(),
    postedBy: '',
    title: '',
    comments: [],
  },
  isFormValid: false,
  isEdit: false,
};

export const updatesFormReducer = createReducer(
  updatesFormInitialState,
  on(UpdateActions.updateUpdatesFormField, (state, { value, isValidForm }) => ({
    ...state,
    currentUpdatesForm: {
      ...state.currentUpdatesForm,
      ...value,
      date: state.currentUpdatesForm.date,
      postedBy: state.currentUpdatesForm.postedBy,
    },
    isFormValid: isValidForm,
  })),
  on(UpdateActions.isEdit, (state, { isEdit }) => ({
    ...state,
    isEdit: isEdit,
    currentUpdatesForm: {
      ...state.currentUpdatesForm,
      date: new Date(Date.now()),
      postedBy: 'ZMBH',
    },
  })),
  on(UpdateActions.isValid, (state, { isValid }) => ({
    ...state,
    isFormValid: isValid,
  })),
  on(UpdateActions.loadUpdateArray, (state, { data }) => {
    console.log(data);
    return {
      ...updatesFormInitialState,
      updatesFormArray: data,
    };
  })
);
