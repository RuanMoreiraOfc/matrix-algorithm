export { MatrixGenerator };

const MatrixGenerator = (valueInMiddle: number) => {
  if (valueInMiddle <= 0) {
    return [];
  }

  if (valueInMiddle === 1) {
    return [1];
  }

  const { queueCount, matrix } = createMatrix(valueInMiddle)(1);

  let fromQueueCountToZero = queueCount;
  while (--fromQueueCountToZero > 0) {
    for (let i = 0; i < queueCount; i++) {
      for (let j = 0; j < queueCount; j++) {
        if (
          i === fromQueueCountToZero - 1 ||
          j === fromQueueCountToZero - 1 ||
          i === queueCount - fromQueueCountToZero ||
          j === queueCount - fromQueueCountToZero
        ) {
          matrix[i][j] = fromQueueCountToZero;
        }
      }
    }
  }

  return matrix;
};

const createMatrix = (valueInMiddle: number) => (initialValue: number) => {
  const queueCount = valueInMiddle + valueInMiddle - 1;
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
