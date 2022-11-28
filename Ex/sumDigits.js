function digitalRoot(n) {
  // convert array string to array number
  let arr = n.toString().split("").map(Number);
  let sum = 0;
  while (arr.length > 1) {
    sum = arr.reduce((a, b) => a + b, 0);
    arr = sum.toString().split("").map(Number);
  }
  return sum;
}
console.log(digitalRoot(942));
