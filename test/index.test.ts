import { MatrixGenerator } from '../src/index';

describe('Matrix Generator', () => {
  it('should return an empty array when a number smaller than zero is passed', () => {
    const valueInMiddle = -1;

    const matrix = MatrixGenerator(valueInMiddle);

    expect(matrix).toEqual([]);
  });

  it('should return an empty array when a number equal to zero is passed', () => {
    const valueInMiddle = 0;

    const matrix = MatrixGenerator(valueInMiddle);

    expect(matrix).toEqual([]);
  });
});
