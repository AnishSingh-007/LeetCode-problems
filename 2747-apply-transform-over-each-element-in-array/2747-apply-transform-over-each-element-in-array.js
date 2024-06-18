/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const arr2=[];
    for(let i=0; i<arr.length; i++){
        const fnOutput = fn(arr[i], i);
        arr2.push(fnOutput);
    }
    return arr2;
};