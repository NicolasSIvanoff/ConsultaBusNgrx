import * as fromPageBus from '../../reducers/page-bus.reducer';
import { selectPageBusState } from '../page-bus.selectors';

describe('PageBus Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPageBusState({
      [fromPageBus.pageBusFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
