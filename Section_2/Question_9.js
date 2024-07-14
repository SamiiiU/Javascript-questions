// Describe the differences between the for loop, while loop, and do...while loop in JavaScript. When might you use each?

// for loop: Used when the number of iterations is known.

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// while loop: Used when the number of iterations is not known and the loop needs to continue until a condition is met.

let k = 0;
while (k < 5) {
    console.log(k);
    k++;
}


// do...while loop: Similar to the while loop, but guarantees that the loop body is executed at least once. 

let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);


