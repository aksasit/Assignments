/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    let temp = str.toLowerCase();
    let ans = 0;
    let n = str.length;
    for(let i=0; i<n;i++){
      if(temp[i] === 'a' || temp[i] === 'e' ||temp[i] === 'i' ||temp[i] === 'o' ||temp[i] === 'u'){
        ans++;
      }
    }
    return ans;
}

module.exports = countVowels;