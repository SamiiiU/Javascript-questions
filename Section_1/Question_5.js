
//  Question 5: Find the sum of all positive numbers in an array.

const arr = [-5,-3 ,3, 5,-2,-1,0 , 7, 4,];

let sum = 0;

arr.forEach( (pos) => {
    if(pos >= 0){
        sum += pos;
    }
})

console.log("the sum of all positive integers is :" ,sum);

