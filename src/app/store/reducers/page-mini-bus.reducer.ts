import { createReducer, on } from '@ngrx/store';
import * as PageMiniBusActions from '../actions/page-mini-bus.actions';
import { PageBusModel } from './../../components/models/pageBusModel';

export const pageMiniBusFeatureKey = 'pageMiniBus';

export interface StateMiniBus {
  routeMiniBus: PageBusModel[] | null;
  error: string;
}

export const initialState: StateMiniBus = {
  routeMiniBus: null,
  error: '',
};

export const reducerRouteMiniBus = createReducer(
  initialState,

  on(
    PageMiniBusActions.loadPageMiniBussSuccess,
    (state, action): StateMiniBus => {
      return {
        ...state,
        routeMiniBus: action.routeMiniBus,
        error: '',
      };
    }
  ),
  on(
    PageMiniBusActions.loadPageMiniBussFailure,
    (state, action): StateMiniBus => {
      return {
        ...state,
        routeMiniBus: null,
        error: action.error,
      };
    }
  )
);
