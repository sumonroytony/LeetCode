/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {
    const finalArray = [];
    let maxNum = nums[0];
    let startPos = 0;
    if(k ==1) return nums;
    for(let i=0; i < nums.length; i++){
        maxNum = Math.max(maxNum, nums[i]);
        if(i >= k-1){
            finalArray.push(maxNum);
        }
    }
    return finalArray;
};


console.log(maxSlidingWindow([7,2,4,5], 3))