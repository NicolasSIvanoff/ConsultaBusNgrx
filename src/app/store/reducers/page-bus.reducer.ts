import { createReducer, on } from '@ngrx/store';
import * as PageBusActions from '../actions/page-bus.actions';
import { PageBusModel } from './../../components/models/pageBusModel';

export const pageBusFeatureKey = 'pageBus';

export interface StateBus {
  routeBus: PageBusModel[] | null;
  error: string;
}

export const initialState: StateBus = {
  routeBus: null,
  error: '',
};

export const reducerRouteBus = createReducer(
  initialState,
  on(PageBusActions.loadPageBussSuccess, (state, action): StateBus => {
    return { ...state, routeBus: action.routeBus, error: '' };
  }),
  on(PageBusActions.loadPageBussFailure, (state, action): StateBus => {
    return { ...state, routeBus: null, error: action.error };
  })
);
