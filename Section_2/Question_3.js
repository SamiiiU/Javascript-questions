// Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for...in: Iterates over the enumerable properties of an object (keys).

const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(key); // logs "a", "b", "c"
}


// for...of: Iterates over the values of an iterable object (like arrays, strings, etc.).

const arr = [1, 2, 3];
for (let value of arr) {
    console.log(value); // logs 1, 2, 3
}
