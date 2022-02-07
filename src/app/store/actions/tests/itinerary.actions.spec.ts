import * as fromItinerary from '../itinerary.actions';

describe('loadItinerarys', () => {
  it('should return an action', () => {
    expect(fromItinerary.loadItinerarys({IdItinerary: 1}).type).toBe(
      '[Itinerary] Load Itinerarys'
    );
  });
});
