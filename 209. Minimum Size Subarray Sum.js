/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 var minSubArrayLen = function(target, nums) {
    let minLength = 100000000;
    let startPos = 0;
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];
        while(sum >= target){
             sum -= nums[startPos];
             minLength = Math.min(minLength, i - startPos+1)
             startPos++;
        }
    }
    if(minLength===100000000) return 0;
    return minLength;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4,3]))