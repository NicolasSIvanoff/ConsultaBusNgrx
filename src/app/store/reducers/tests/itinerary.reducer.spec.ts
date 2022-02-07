import { reducerItinerary, initialState } from '../itinerary.reducer';

describe('Itinerary Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducerItinerary(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
