/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {  
  let temp = str.replace(/[^\w\s]|_/g, '').replace(/\s/g, '').toLowerCase();
  let n = temp.length;
  let left = 0, right = n-1;
  while(left<=right){
    if(temp[left++] !== temp[right--]){
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
