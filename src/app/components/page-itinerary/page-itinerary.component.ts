import { ServiceService } from './../service/service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import * as ActionItinerary from '../../store/actions/itinerary.actions';
import { selectItinerarySuccess } from './../../store/selectors/itinerary.selectors';

@Component({
  selector: 'app-page-itinerary',
  templateUrl: './page-itinerary.component.html',
  styleUrls: ['./page-itinerary.component.scss'],
})
export class PageItineraryComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  itineraryStore$!: Observable<any | null>;
  itineraryStore!: Array<any | null>;
  subscription: Subscription[] = [];
  codigo = this.itineraryStore;
  nome: string = '';
  teste!: any;

  constructor(private store: Store, private activatedRoute: ActivatedRoute) {
    this.itineraryStore$ = this.store.select(selectItinerarySuccess);
    this.getItineraryStore().then((resultItinerary) => {
      this.itineraryStore = resultItinerary as Array<any>;
    });
    4;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      language: {
        url: 'https://cdn.datatables.net/plug-ins/1.11.3/i18n/pt_br.json',
      },
    };
    this.getItineraryDispatch();
  }

  getItineraryDispatch() {
    const id = this.activatedRoute.snapshot.params.id;
    this.store.dispatch(ActionItinerary.loadItinerarys({ IdItinerary: id }));
  }

  getItineraryStore() {
    const promise = new Promise((resolve, reject) => {
      this.subscription.push(
        this.itineraryStore$.subscribe((data) => {
          let itineraryStore: Array<any> = data;
          this.dtTrigger.next();
          if (itineraryStore != null) {
            this.nome = data.nome;
            this.codigo = data.codigo;
            resolve(itineraryStore);
          }
        })
      );
    });
    return promise;
  }
}
