import { Board } from './board';

describe('Board', () => {
  it('should create an instance', () => {
    expect(new Board(0,0)).toBeTruthy();
  });
});
