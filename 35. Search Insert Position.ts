function searchInsert(nums: number[], target: number): number {
  return binarySearch(nums, target, 0, nums.length);
}

function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  if (start > end) return start;
  let mid = Math.floor((start + end) / 2);
  if (nums[mid] === target) return mid;
  if (!nums[mid]) return end;
  if (nums[mid] > target) return binarySearch(nums, target, start, mid - 1);
  else return binarySearch(nums, target, mid + 1, end);
}

console.log(searchInsert([1, 2, 3, 7], 5));
