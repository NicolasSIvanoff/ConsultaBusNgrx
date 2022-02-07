import { reducerRouteBus, initialState } from '../page-bus.reducer';

describe('PageBus Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducerRouteBus(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
