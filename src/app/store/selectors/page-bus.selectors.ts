import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPageBus from '../reducers/page-bus.reducer';

export const selectPageBusState = createFeatureSelector<fromPageBus.StateBus>(
  fromPageBus.pageBusFeatureKey
);
export const selectSuccessRoute = createSelector(
  selectPageBusState,
  (state) => state.routeBus
);
export const selectRouteError = createSelector(
  selectPageBusState,
  (state) => state.error
);
