import * as fromPageMiniBus from '../page-mini-bus.actions';

describe('loadPageMiniBuss', () => {
  it('should return an action', () => {
    expect(fromPageMiniBus.loadPageMiniBuss().type).toBe(
      '[PageMiniBus] Load PageMiniBuss'
    );
  });
});
