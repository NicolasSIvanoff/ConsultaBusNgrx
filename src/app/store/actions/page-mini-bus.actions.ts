import { PageBusModel } from './../../components/models/pageBusModel';
import { createAction, props } from '@ngrx/store';

export const loadPageMiniBuss = createAction('[PageMiniBus] Load PageMiniBuss');

export const loadPageMiniBussSuccess = createAction(
  '[PageMiniBus] Load PageMiniBuss Success',
  props<{ routeMiniBus: PageBusModel[] }>()
);

export const loadPageMiniBussFailure = createAction(
  '[PageMiniBus] Load PageMiniBuss Failure',
  props<{ error: any }>()
);
