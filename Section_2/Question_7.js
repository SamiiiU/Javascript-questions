// How can you clone an object in JavaScript? Provide an example of each deep copy, shallow copy, and reference copy.

// shallowCopy

const obj = { a: 1, b: 2 };
const shallowCopy = { ...obj };


//deep copy
const obj2 = { a: 1, b: { c: 3 } };
const deepCopy = JSON.parse(JSON.stringify(obj2));

// Reference copy:

const obj3 = { a: 1, b: 2 };
const refCopy = obj3; // Both refCopy and obj point to the same object


