import { InfosComponent } from './components/infos/infos.component';
import { ErrorComponent } from './components/error/error.component';
import { PageItineraryComponent } from './components/page-itinerary/page-itinerary.component';
import { PageBusComponent } from './components/page-bus/page-bus.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'bus', component: PageBusComponent },
  { path: 'minibus', component: PageBusComponent },
  { path: 'itinerary/:id', component: PageItineraryComponent },
  { path: 'infos', component: InfosComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
