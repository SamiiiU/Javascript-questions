
// Question 6: Find the index of the first occurrence of a specific element in an array.

const arr = [2,3,4,-3,12,-4,2,-13,-5,4];

const req = 4;

for( i = 0 ; i < arr.length ; i++){
    if(arr[i] ===  req ){
        console.log("first occurence of " , req  , " is at index" , i);
        break;
    }
}


