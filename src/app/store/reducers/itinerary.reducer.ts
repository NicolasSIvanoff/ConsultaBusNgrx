import { createReducer, on } from '@ngrx/store';
import * as ItineraryActions from '../actions/itinerary.actions';

export const itineraryFeatureKey = 'itinerary';

export interface StateItinerary {
  payload: any | null;
  error: string;
}

export const initialState: StateItinerary = {
  payload: null,
  error: '',
};

export const reducerItinerary = createReducer(
  initialState,
  on(
    ItineraryActions.loadItinerarysSuccess,
    (state, action): StateItinerary => {
      return {
        ...state,
        payload: action.itinerary,
        error: '',
      };
    }
  ),
  on(
    ItineraryActions.loadItinerarysFailure,
    (state, action): StateItinerary => {
      return {
        ...state,
        payload: null,
        error: action.error,
      };
    }
  )
);
