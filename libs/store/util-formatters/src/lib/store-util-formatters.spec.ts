import { formatRating } from './store-util-formatters';

describe('storeUtilFormatters', () => {
  it('should work', () => {
    expect(formatRating(0.4111)).toEqual('4.1 / 10');
  });
});
