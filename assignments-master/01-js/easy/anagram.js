/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  var a=str1.toLowerCase().trim().split("").sort().join(""); 
  var b=str2.toLowerCase().trim().split("").sort().join("");
  return a==b;
}

module.exports = isAnagram;
