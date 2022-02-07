import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ItineraryEffects } from '../itinerary.effects';

describe('ItineraryEffects', () => {
  let actions$: Observable<any>;
  let effects: ItineraryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItineraryEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(ItineraryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
