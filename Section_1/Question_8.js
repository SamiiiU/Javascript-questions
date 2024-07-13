
// Question 8: Sort the array in ascending and descending without built-in methods.


// Ascending

const arr = [3,4,2,6,1,5];

for(i = 0 ; i < arr.length ; i++){
    for(j=i+1 ; j < arr.length ; j++){
        if(arr[i] >= arr[j]){
            arr[i] +=  arr[j];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j];
        }
    }
}

console.log(arr);



// Descending

const arr = [3,4,2,6,1,5];

for(i = 0 ; i < arr.length ; i++){
    for(j=i+1 ; j < arr.length ; j++){
        if(arr[i] <= arr[j]){
            arr[i] +=  arr[j];
            arr[j] = arr[i] - arr[j];
            arr[i] = arr[i] - arr[j];
        }
    }
}

console.log(arr);

