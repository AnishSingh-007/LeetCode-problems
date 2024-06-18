/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    // declerative programming
    // return arr.filter(fn);

    // imperative programming
    const res = [];
    for(const key in arr){
        const fnOutput = fn(arr[key], Number(key));
        if(fnOutput) res.push(arr[key]);
    }
    return res;
};