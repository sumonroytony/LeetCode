var twoSum = function (nums, target) {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in obj) {
      return [obj[nums[i]], i];
    }
    const result = target - nums[i];
    obj[result] = i;
  }
};

const nums = [2, 7, 5, 7, 8, 1];
const target = 9;

console.log(twoSum(nums, target));
