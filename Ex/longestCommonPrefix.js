/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let prefix = "";
  let isFinish = false;

  //Trouver le plus petit mot de la liste
  strs.sort((a, b) => a.length - b.length);
  const smallestWord = strs[0];
  //console.log(strs);

  i = 0;
  while (i < smallestWord.length && !isFinish) {
    // console.log(`i : ${i}`);
    const isEqual = (currentValue) =>
      currentValue.slice(0, i + 1) == smallestWord.slice(0, i + 1);

    if (strs.every(isEqual)) {
      prefix = smallestWord.slice(0, i + 1);
    } else {
      isFinish = true;
    }

    i++;
  }
  //console.log(`prefix : ${prefix}`);
  return prefix;
};
