const M = [
  [1, 2, -1],
  [2, 1, 2],
  [-1, 2, 1],
];

const minor = (matrix, row, col) => {
  return determinant(
    matrix.filter((_, i) => i != row).map((r) => r.filter((_, j) => j != col))
  );
};

const cofactor = (matrix, row, col) => {
  return (-1) ** (row + col) * matrix[row][col] * minor(matrix, row, col);
};

const determinant = (matrix) => {
  if (matrix.length == 1) return matrix[0][0];

  let det = 0;

  for (let row = 0; row < matrix.length; row++) {
    det += cofactor(matrix, row, 0);
  }

  return det;
};

const inverse = (matrix) => {
  const det = determinant(matrix);

  return matrix.map((r, x) =>
    r.map((c, y) => ((-1) ** (x + y) * minor(matrix, x, y)) / det)
  );
};

console.log(determinant(M));
console.log(inverse(M));
