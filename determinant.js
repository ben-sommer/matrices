const M = [
  [2, -3, 1],
  [2, 0, -1],
  [1, 4, 5],
];

const determinant = (matrix) => {
  if (matrix.length == 1) return matrix[0][0];

  let det = 0;

  for (let row = 0; row < matrix.length; row++) {
    det +=
      (-1) ** row *
      matrix[row][0] *
      determinant(matrix.filter((_, i) => i != row).map((r) => r.slice(1)));
  }

  return det;
};

console.log(determinant(M)); // 49
