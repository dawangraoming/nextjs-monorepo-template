import { count } from './count';

describe('count function', () => {
  it('should be return a number', function () {
    expect(count(1, 2)).toBe(3);
  });
});
