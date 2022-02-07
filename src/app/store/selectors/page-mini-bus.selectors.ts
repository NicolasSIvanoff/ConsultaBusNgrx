import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageMiniBus from '../reducers/page-mini-bus.reducer';

export const selectPageMiniBusState =
  createFeatureSelector<fromPageMiniBus.StateMiniBus>(
    fromPageMiniBus.pageMiniBusFeatureKey
  );
export const selectMiniBusSuccess = createSelector(
  selectPageMiniBusState,
  (state) => state.routeMiniBus
);
export const selectMiniBusError = createSelector(
  selectPageMiniBusState,
  (state) => state.error
);
