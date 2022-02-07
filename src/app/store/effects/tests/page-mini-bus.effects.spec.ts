import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PageMiniBusEffects } from '../page-mini-bus.effects';

describe('PageMiniBusEffects', () => {
  let actions$: Observable<any>;
  let effects: PageMiniBusEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PageMiniBusEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(PageMiniBusEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
