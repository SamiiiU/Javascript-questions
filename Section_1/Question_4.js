// Question 4: Check if a string is a palindrome.


const str = "civic";

const palindrome = str.split('').reverse().join('');

if(str === palindrome){
    console.log("your string is palindrom" );
}else{
    console.log("not palindrome");
}

