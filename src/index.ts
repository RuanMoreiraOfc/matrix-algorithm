export { MatrixGenerator };

const MatrixGenerator = (valueInMiddle: number) => {
  if (valueInMiddle <= 0) {
    return [];
  }

  if (valueInMiddle === 1) {
    return [1];
  }

  if (valueInMiddle === 2) {
    const middleIndex = valueInMiddle - 1;
    const { matrix } = createMatrix(valueInMiddle)(1);
    matrix[middleIndex][middleIndex] = 2;

    return matrix;
  }
};

const createMatrix = (valueInMiddle: number) => (initialValue: number) => {
  const queueCount = 3;
  const matrix = Array.from(
    { length: queueCount }, //
    (_, i) =>
      Array.from(
        { length: queueCount }, //
        (_, j) => initialValue,
      ),
  );

  return {
    queueCount,
    matrix,
  };
};
