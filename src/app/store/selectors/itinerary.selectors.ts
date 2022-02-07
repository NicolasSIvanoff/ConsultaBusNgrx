import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromItinerary from '../reducers/itinerary.reducer';

export const selectItineraryState =
  createFeatureSelector<fromItinerary.StateItinerary>(
    fromItinerary.itineraryFeatureKey
  );

export const selectItinerarySuccess = createSelector(
  selectItineraryState,
  (state) => state.payload
);

export const selectItineraryError = createSelector(
  selectItineraryState,
  (state) => state.error
);
