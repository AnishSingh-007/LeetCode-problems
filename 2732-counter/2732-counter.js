/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let count = n;
    return function() {
        return count++;
    };
};

class Counter {
    constructor(n){
        this.n = n;
    }

    increment(){
        return ++this.n;
    }
}

const counter = new Counter(10);
counter.increment();
counter.increment();
/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */