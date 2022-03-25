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

  it('should return an one by one array when a number equal to one is passed', () => {
    const valueInMiddle = 1;

    const matrix = MatrixGenerator(valueInMiddle);

    expect(matrix).toEqual([1]);
  });

  it('should return an three by three matrix when a number equal to two is passed', () => {
    const valueInMiddle = 2;

    const matrix = MatrixGenerator(valueInMiddle);

    expect(matrix).toEqual([
      [1, 1, 1],
      [1, 2, 1],
      [1, 1, 1],
    ]);
  });

  it('should return an five by five matrix when a number equal to three is passed', () => {
    const valueInMiddle = 3;

    const matrix = MatrixGenerator(valueInMiddle);

    expect(matrix).toEqual([
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 3, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1],
    ]);
  });
});
