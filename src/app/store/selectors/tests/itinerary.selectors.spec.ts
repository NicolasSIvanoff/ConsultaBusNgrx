import * as fromItinerary from '../../reducers/itinerary.reducer';
import { selectItineraryState } from '../itinerary.selectors';

describe('Itinerary Selectors', () => {
  it('should select the feature state', () => {
    const result = selectItineraryState({
      [fromItinerary.itineraryFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
