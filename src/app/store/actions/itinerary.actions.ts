import { PageBusModel } from './../../components/models/pageBusModel';
import { createAction, props } from '@ngrx/store';

export const loadItinerarys = createAction(
  '[Itinerary] Load Itinerarys',
  props<{ IdItinerary: number }>()
);

export const loadItinerarysSuccess = createAction(
  '[Itinerary] Load Itinerarys Success',
  props<{ itinerary: any }>()
);

export const loadItinerarysFailure = createAction(
  '[Itinerary] Load Itinerarys Failure',
  props<{ error: string }>()
);
