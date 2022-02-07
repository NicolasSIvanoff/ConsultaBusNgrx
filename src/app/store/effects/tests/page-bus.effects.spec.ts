import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageBusEffects } from '../page-bus.effects';

describe('PageBusEffects', () => {
  let actions$: Observable<any>;
  let effects: PageBusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageBusEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(PageBusEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
