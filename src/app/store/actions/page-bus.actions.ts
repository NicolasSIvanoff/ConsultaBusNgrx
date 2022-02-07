import { PageBusModel } from './../../components/models/pageBusModel';
import { createAction, props } from '@ngrx/store';

export const loadPageBuss = createAction('[PageBus] Load PageBuss');

export const loadPageBussSuccess = createAction(
  '[PageBus] Load PageBuss Success',
  props<{ routeBus: PageBusModel[] }>()
);

export const loadPageBussFailure = createAction(
  '[PageBus] Load PageBuss Failure',
  props<{ error: string }>()
);
