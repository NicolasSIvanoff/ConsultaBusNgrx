import { selectRouteError } from './../../store/selectors/page-bus.selectors';
import { selectMiniBusSuccess } from './../../store/selectors/page-mini-bus.selectors';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import * as ActionsFrom from '../../store/actions/page-bus.actions';
import { selectSuccessRoute } from '../../store/selectors/page-bus.selectors';
import { PageBusModel } from '../models/pageBusModel';
import * as MiniBusAction from '../../store/actions/page-mini-bus.actions';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-bus',
  templateUrl: './page-bus.component.html',
  styleUrls: ['./page-bus.component.scss'],
})
export class PageBusComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  routeBus$: Observable<PageBusModel[] | null>;
  routeBus!: PageBusModel[] | null;

  routeError$!: Observable<string>;
  routeError!: string;

  subscription: Subscription[] = [];
  routeMiniBus$!: Observable<PageBusModel[] | null>;
  routeMiniBusError$!: Observable<string>;
  constructor(
    private store: Store,

    private activedRouter: ActivatedRoute
  ) {
    this.routeBus$ = this.store.select(selectSuccessRoute);
    this.routeMiniBus$ = this.store.select(selectMiniBusSuccess);
    this.routeError$ = this.store.select(selectRouteError);
  }

  ngOnInit(): void {
    if (this.activedRouter.snapshot.routeConfig?.path == 'bus') {
      this.store.dispatch(ActionsFrom.loadPageBuss());
    } else if (this.activedRouter.snapshot.routeConfig?.path == 'minibus') {
      this.store.dispatch(MiniBusAction.loadPageMiniBuss());
    }
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };

    this.subscription.push(
      this.routeBus$.subscribe((data) => {
        this.routeBus = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.routeMiniBus$.subscribe((data) => {
        this.routeBus = data;
        this.dtTrigger.next();
      })
    );
    this.subscription.push(
      this.routeError$.subscribe((error) => {
        this.routeError = error;
      })
    );
    this.subscription.push(
      this.routeMiniBusError$.subscribe((error) => {
        this.routeError = error;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.forEach((x) => x.unsubscribe());
  }
}
