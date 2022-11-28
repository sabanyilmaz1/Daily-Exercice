// Time complexity: O(n)
// Space complexity: O(n)

/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function (s) {
  const stack = [];

  for (const c of s) {
    if (c === "(") stack.push(")");
    else if (c === "{") stack.push("}");
    else if (c === "[") stack.push("]");
    else if (stack.length === 0 || stack.pop() !== c) return false;
    console.log(`c : ${c} stack : ${stack}`);
  }

  return stack.length === 0;
};

console.log(isValid("({})"));
