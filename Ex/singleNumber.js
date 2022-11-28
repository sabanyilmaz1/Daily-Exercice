/**
 * @param {number[]} nums
 * @return {number}
 */
// time O(n)
// space O(n)
function singleNumber(nums) {
  const map = [];
  for (let n of nums) {
    if (map[n] == null) map[n] = 0;
    map[n]++;
  }
  console.log(map);

  for (let n in map) {
    if (map[n] === 1) return Number(n);
  }
}
console.log(singleNumber([4, 1, 2, 1, 2]));
