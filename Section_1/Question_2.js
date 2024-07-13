// Question 2 : Count the number of vowels in a given string.

const str_vowels = "String with vowels and also with capital vowels"; //change the string input to get diff results..................
const vowels = "aeiouAEIOU";
let count = 0;

for( i = 0 ; i < str_vowels.length ; i++){
    for(j= 0 ; j < vowels.length ; j++){
        if(str_vowels[i] === vowels[j]){
            count++;
        }
    }
}

console.log("there are " ,count , " vowels" );
