// 2. How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?


// Ans : The optional chaining operator (?.) allows you to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is valid. If any reference in the chain is null or undefined, the entire expression short-circuits and evaluates to undefined.

const user = {
    profile: {
        name: "Alice",
        address: {
            city: "Wonderland"
        }
    }
};

const city = user.profile?.address?.city; // "Wonderland"
const zip = user.profile?.address?.zip; // undefined (no error thrown)
