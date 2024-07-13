
//  Question 7: Remove all duplicates from an array without built-in methods.


function removeDuplicates(array) {
    let uniqueArray = [];

    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (array[i] === uniqueArray[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniqueArray.push(array[i]);
        }
    }

    return uniqueArray;
}

const array = [1,4,5,2,4,3,5,2,1];

const duplicates = removeDuplicates(array);

console.log(duplicates);


