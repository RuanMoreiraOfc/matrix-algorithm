export { MatrixGenerator };

const MatrixGenerator = (valueInMiddle: number) => {
  if (valueInMiddle <= 0) {
    return [];
  }

  if (valueInMiddle === 1) {
    return [1];
  }

  return [
    [1, 1, 1],
    [1, 2, 1],
    [1, 1, 1],
  ];
};
