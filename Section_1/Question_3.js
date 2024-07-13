// Question 3: Convert the first letter of each word in a sentence to uppercase.

let string = "convert the first letter of each word in this string to uppercase";

let result = string.split(' ').map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}).join(' ');

console.log(result);
