// Write a loop that iterates over an array of numbers and logs whether each number is even or odd, using a ternary operator.

const arr = [1,2,3,4,5,6,7,8,9];

for(i=0 ; i < arr.length ; i++){
    arr[i]%2==0 ? console.log( arr[i] , "is even") : console.log(arr[i] , "is odd");
        
}
