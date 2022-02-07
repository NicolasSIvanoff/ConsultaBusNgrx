import { FooterComponent } from './components/footer/footer.component';
import { InfosComponent } from './components/infos/infos.component';
import { ItineraryEffects } from './store/effects/itinerary.effects';
import { HeaderComponent } from './components/header/header.component';
import { PageMiniBusEffects } from './store/effects/page-mini-bus.effects';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageBusComponent } from './components/page-bus/page-bus.component';
import { PageItineraryComponent } from './components/page-itinerary/page-itinerary.component';
import { ErrorComponent } from './components/error/error.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/reducers/root.reducer';
import { PageBusEffects } from './store/effects/page-bus.effects';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    PageBusComponent,
    PageItineraryComponent,
    ErrorComponent,
    HeaderComponent,
    InfosComponent,
    FooterComponent,
  ],
  imports: [
    DataTablesModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([
      PageBusEffects,
      PageMiniBusEffects,
      ItineraryEffects,
    ]),
    StoreModule.forRoot(reducers, {}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
