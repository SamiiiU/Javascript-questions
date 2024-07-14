// xplain the concept of "closures" in JavaScript and provide an example of their practical use.


// A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. Closures are created every time a function is created, at function creation time.

function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
