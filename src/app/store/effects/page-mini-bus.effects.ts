import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PageMiniBusActions from '../actions/page-mini-bus.actions';
import { ServiceService } from './../../components/service/service.service';

@Injectable()
export class PageMiniBusEffects {
  loadPageMiniBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageMiniBusActions.loadPageMiniBuss),
      mergeMap(() =>
        this.serv.getApiMiniBus().pipe(
          map((routeMiniBus) =>
            PageMiniBusActions.loadPageMiniBussSuccess({ routeMiniBus })
          ),
          catchError((error) =>
            of(PageMiniBusActions.loadPageMiniBussFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private serv: ServiceService) {}
}
