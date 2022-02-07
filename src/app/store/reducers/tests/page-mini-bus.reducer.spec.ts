import { reducerRouteMiniBus, initialState } from '../page-mini-bus.reducer';

describe('PageMiniBus Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducerRouteMiniBus(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
