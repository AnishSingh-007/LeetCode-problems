/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    // Approach 1

    // function callback(resolve, reject){
    //     setTimeout(resolve, millis);
    // }
    // return new Promise(callback);

    // Approach 2
    await new Promise((resolve, reject) => {
        setTimeout(resolve, millis)
    })

}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */