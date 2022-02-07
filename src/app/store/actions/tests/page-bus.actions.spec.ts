import * as fromPageBus from '../page-bus.actions';

describe('loadPageBuss', () => {
  it('should return an action', () => {
    expect(fromPageBus.loadPageBuss().type).toBe('[PageBus] Load PageBuss');
  });
});
