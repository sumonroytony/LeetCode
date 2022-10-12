function removeDuplicates(nums: number[]): number {
  if (nums.length <= 0) return 1;
  let obj = {};
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      nums[count] = nums[i];
      count++;
      obj[nums[i]] = 'found';
    }
  }
  return count;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
