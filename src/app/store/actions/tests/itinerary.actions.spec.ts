import * as fromItinerary from '../itinerary.actions';

describe('loadItinerarys', () => {
  it('should return an action', () => {
    expect(fromItinerary.loadItinerarys().type).toBe(
      '[Itinerary] Load Itinerarys'
    );
  });
});
