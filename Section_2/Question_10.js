// Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

const users = [
    { name: "Alice", address: { city: "Wonderland" } },
    { name: "Bob" },
    { name: "Charlie", address: { city: "Chocolate Factory" } }
];

users.forEach(user => {
    console.log(user.address?.city || "City not available");
});
