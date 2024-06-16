/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let initialValue= init;
    
    function increment(){
        return ++initialValue;
    }
    function decrement(){
        return --initialValue;
    }
    function reset(){
        initialValue = init;
        return initialValue;
    }

    return {
        increment, decrement, reset
    }
};

class Counter{
    constructor(init){
        this.init= init;
        this.count= init;
    }

    increment(){
        return ++this.count;
    }
    decrement(){
        return --this.count;
    }
    reset(){
        return this.init;
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */