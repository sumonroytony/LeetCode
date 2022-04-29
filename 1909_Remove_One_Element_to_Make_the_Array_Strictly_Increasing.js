var canBeIncreasing = function (nums) {
  let used = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (used > 1) return false;
    if (nums[i] <= nums[i - 1]) {
      if (nums[i] > nums[i - 2]) {
        i = i - 1;
        used = 1;
      } else if (nums[i - 1] > nums[i - 2]) {
        if (nums[i - 1] < nums[i + 1]) {
          i = i - 1;
          used = 1;
        } else return false;
      } else {
        return false;
      }
    }
  }
  if (used <= 1) return true;
};

console.log(canBeIncreasing([2, 3, 1, 2]));
