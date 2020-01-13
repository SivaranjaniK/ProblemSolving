function printPath(arr) {
  const matrixSize = arr.length;
  const path = new Array(matrixSize);
  for (let i = 0; i < matrixSize; i++) {
    path[i] = new Array(matrixSize).fill(0);
  }
  const direction = "down";
  if (!placeElements(path, 0, 0, arr, matrixSize, direction)) {
    console.log("No solution");
  } else {
    console.log(path);
  }
}

function placeElements(path, row, column, arr, matrixSize, direction) {
  if (row === matrixSize - 1 && column === matrixSize - 1) {
    path[row][column] = 1;
    return true;
  }
  if (isValidRoute(arr, row, column, matrixSize)) {
    path[row][column] = 1;
    if (
      direction !== "up" &&
      placeElements(path, row + 1, column, arr, matrixSize, "down")
    ) {
      return true;
    }
    if (
      direction !== "left" &&
      placeElements(path, row, column + 1, arr, matrixSize, "right")
    ) {
      return true;
    }
    if (
      direction !== "down" &&
      placeElements(path, row - 1, column, arr, matrixSize, "up")
    ) {
      return true;
    }
    if (
      direction !== "right" &&
      placeElements(path, row, column - 1, arr, matrixSize, "left")
    ) {
      return true;
    }

    path[row][column] = 0;
    return false;
  }
  return false;
}

function isValidRoute(arr, row, column, matrixSize) {
  if (
    row >= 0 &&
    column >= 0 &&
    row < matrixSize &&
    column < matrixSize &&
    arr[row][column] === 1
  ) {
    return true;
  }
  return false;
}

printPath([
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 1, 1]
]);

// function printPath(arr) {
//   const matrixSize = arr.length;
//   const path = new Array(matrixSize);
//   for (let i = 0; i < matrixSize; i++) {
//     path[i] = new Array(matrixSize).fill(0);
//   }

//   if (!placeElements(path, 0, 0, arr, matrixSize)) {
//     console.log("No solution");
//   } else {
//     console.log(path);
//   }
// }

// function placeElements(path, row, column, arr, matrixSize) {
//   if (row === matrixSize - 1 && column === matrixSize - 1) {
//     path[row][column] = 1;
//     return true;
//   }
//   if (isValidRoute(arr, row, column, matrixSize)) {
//     path[row][column] = 1;
//     if (placeElements(path, row, column + 1, arr, matrixSize)) {
//       return true;
//     }
//     if (placeElements(path, row + 1, column, arr, matrixSize)) {
//       return true;
//     }
//     path[row][column] = 0;
//     return false;
//   }
//   return false;
// }

// function isValidRoute(arr, row, column, matrixSize) {
//   if (
//     row >= 0 &&
//     column >= 0 &&
//     row < matrixSize &&
//     column < matrixSize &&
//     arr[row][column] === 1
//   ) {
//     return true;
//   }
//   return false;
// }

// printPath([
//   [1, 0, 1],
//   [1, 1, 0],
//   [0, 1, 1]
// ]);
