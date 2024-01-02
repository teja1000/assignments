/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const x={a:"a",e:"e",i:"i",o:"o",u:"u"};
  let count=0;
  for(let i=0;i<str.length;i++){
    let y=str[i].toLowerCase();
    if (x[y]){
      count+=1;
    }

  }
  return count

    
}

module.exports = countVowels;