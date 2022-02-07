import { PageBusModel } from './../models/pageBusModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  apiBus =
    'http://www.poatransporte.com.br/php/facades/process.php?a=nc&p=%25&t=';

  apiItinerary =
    'http://www.poatransporte.com.br/php/facades/process.php?a=il&p=';

  getApiBus(): Observable<PageBusModel[]> {
    return this.http.get<any>(`${this.apiBus}o`);
  }
  getApiMiniBus(): Observable<PageBusModel[]> {
    return this.http.get<any>(`${this.apiBus}l`);
  }
  getApiItinerary(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiItinerary}${id}`);
  }
}
