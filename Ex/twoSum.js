// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums, target) => {
  let storage = [];
  for (let [i, num] of nums.entries()) {
    console.log(`i : ${i}, num : ${num}, target : ${target}`);
    if (storage[target - num] !== undefined) {
      return [storage[target - num], i];
    }
    storage[num] = i;
    console.log("storage", storage);
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//my solution
const twoSum2 = (nums, target) => {
  isFinded = false;
  var arrayIndices = [];
  for (let i = 0; i <= nums.length; i++) {
    let numI = nums[i];
    let indiceI = i;
    let numsFiltered = nums.filter((_, index) => index != indiceI);

    let j = 0;
    while (j < numsFiltered.length && isFinded == false) {
      if (numI + numsFiltered[j] == target) {
        indicesJ = arrayIndices.push(i, j + 1);
        isFinded = true;
      }
      j++;
    }
  }
  return arrayIndices;
};

console.log(twoSum([2, 3, 7, 15], 9));

module.exports = { twoSum, twoSum2 };
