// Q: Take an array of strings, filter out the ones with a length less than 5, and then capitalize the remaining strings using the `map` method.

const strings = ["hello", "world", "js", "code", "openai"];
const filteredAndCapitalized = strings
    .filter(str => str.length >= 5)
    .map(str => str.toUpperCase());
console.log(filteredAndCapitalized); // Output: ["HELLO", "WORLD", "OPENAI"]
