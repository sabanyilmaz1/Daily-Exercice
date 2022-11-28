/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const firstRow = [1];
  const secondRow = [1, 1];
  const result = [];
  if (numRows === 1) {
    result.push(firstRow);
    return result;
  }
  if (numRows === 2) {
    result.push(firstRow);
    result.push(secondRow);
    return result;
  }
  result.push(firstRow);
  result.push(secondRow);
  for (let i = 2; i < numRows; i++) {
    // on stocke la ligne précédente
    const prevRow = result[i - 1];
    const currentRow = [];
    // on ajoute 1 au début de la ligne
    currentRow.push(1);
    // on ajoute la somme des 2 chiffres précédents à la ligne courante (sauf le premier et le dernier)
    for (let j = 1; j < prevRow.length; j++) {
      currentRow.push(prevRow[j - 1] + prevRow[j]);
    }
    // on ajoute 1 à la fin de la ligne
    currentRow.push(1);
    result.push(currentRow);
  }

  return result;
};

console.log(generate(5));
