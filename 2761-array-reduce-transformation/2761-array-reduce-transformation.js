/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    // declerative programming
    // return nums.reduce(fn, init)

    // imperative programming
    let nums2 = init;
    for (const i in nums){
        nums2 = fn(nums2, nums[i]);
    }
    return nums2;
};