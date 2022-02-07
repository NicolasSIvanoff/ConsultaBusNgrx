import { ActionReducerMap } from '@ngrx/store';
import * as fromPageBus from '../reducers/page-bus.reducer';
import * as fromPageMiniBus from '../reducers/page-mini-bus.reducer';
import * as fromItinerary from '../reducers/itinerary.reducer';

export const reducers: ActionReducerMap<any> = {
  [fromPageBus.pageBusFeatureKey]: fromPageBus.reducerRouteBus,
  [fromPageMiniBus.pageMiniBusFeatureKey]: fromPageMiniBus.reducerRouteMiniBus,
  [fromItinerary.itineraryFeatureKey]: fromItinerary.reducerItinerary,
};
