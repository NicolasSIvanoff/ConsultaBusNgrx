import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as ItineraryActions from '../actions/itinerary.actions';
import { ServiceService } from './../../components/service/service.service';

@Injectable()
export class ItineraryEffects {
  loadItinerarys$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItineraryActions.loadItinerarys),
      mergeMap((props) =>
        this.serv.getApiItinerary(props.IdItinerary).pipe(
          map((resultId) => {
            return ItineraryActions.loadItinerarysSuccess({
              itinerary: resultId,
            });
          }),
          catchError((error) =>
            of(ItineraryActions.loadItinerarysFailure({ error }))
          )
        )
      )
    )
  );

  constructor(private actions$: Actions, private serv: ServiceService) {}
}
