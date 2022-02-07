import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as PageBusActions from '../actions/page-bus.actions';
import { ServiceService } from './../../components/service/service.service';

@Injectable()
export class PageBusEffects {
  loadPageBuss$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(PageBusActions.loadPageBuss),
      mergeMap(() =>
        this.serv.getApiBus().pipe(
          map((routeBus) => PageBusActions.loadPageBussSuccess({ routeBus })),
          catchError((error) =>
            of(PageBusActions.loadPageBussFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private serv: ServiceService) {}
}
