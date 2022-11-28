/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  console.log(str);
  let str2 = str.split("").reverse().join("");
  return str === str2;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
