/**
 * @param {number[]} digits
 * @return {number[]}
 */

//  Input: digits = [1,2,3]
//  Output: [1,2,4]

//my code
var plusOne = function (digits) {
  let number = BigInt(digits.join(""));

  number++;

  number = number.toString().split("");
  number = number.map((str) => {
    return Number(str);
  });
  return number;
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
