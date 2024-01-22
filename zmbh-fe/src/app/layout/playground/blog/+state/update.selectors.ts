import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UPDATES_FEATURE_KEY, UpdatesFormState } from './update.reducer';

export const selectUpdatesFeature =
  createFeatureSelector<UpdatesFormState>(UPDATES_FEATURE_KEY);

export const selectUpdatesForm = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state
);

export const selectUpdatesCreateForm = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state.currentUpdatesForm
);

export const selectIsEdit = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state.isEdit
);
export const selectIsValid = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state.isFormValid
);
export const selectIsLoading = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state.isLoading
);
export const selectUpdatesArray = createSelector(
  selectUpdatesFeature,
  (state: UpdatesFormState) => state.updatesFormArray || []
);
