import * as fromPageMiniBus from '../../reducers/page-mini-bus.reducer';
import { selectPageMiniBusState } from '../page-mini-bus.selectors';

describe('PageMiniBus Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPageMiniBusState({
      [fromPageMiniBus.pageMiniBusFeatureKey]: {},
    });

    expect(result).toEqual({error: '', routeMiniBus: []});
  });
});
