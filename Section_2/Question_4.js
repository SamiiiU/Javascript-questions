// Define a function calculateAverage that takes an array of numbers as an argument and returns the average value.

function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

const array = [3,5,2,6,3,5];
const avg = calculateAverage(array);
console.log(avg);
