/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Approach 1

    // return new Promise(async (res, rej) => {
    //     promise1.then((val1)=> {
    //         promise2.then((val2)=> res(val1 + val2))
    //     })

    //     const promiseArray = await Promise.all([promise1, promise2]);
    //     res(promiseArray[0] + promiseArray[1])
    // });

    // Approach 2

    // const [val1 , val2] = await Promise.all([promise1, promise2])
    // return val1 + val2

    // Approach 3
    return (( await promise1 ) + (await promise2))
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */