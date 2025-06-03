/*
Given a string **`s`** consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return **`'_'`**.
Example
- For **`s = "abacabad"`**, the output should be
    
    **`solution(s) = 'c'`**.
    
    There are **`2`** non-repeating characters in the string: **`'c'`**and **`'d'`**. Return **`c`** since it appears in the string first.
    
- For **`s = "abacabaabacaba"`**, the output should be
    
    **`solution(s) = '_'`**.
    
    There are no characters in this string that do not repeat.
*/

/*
/*
## PEDAC
**Problem**
input: a string of lowercase letters
output: return the first instance of a non-repeating character


**Examples/Edge Case:** 
Come up with two of your own examples: 
input: "abababababcdcddcdcdcdeplpllplpl"
output: "e" - first non-repeating letter
Edge case to look out for is when there're no repeating letters, return '_'

**Data Structure/Data Type**
Function accepts only 
We have to loop through the string
Write an if statement to check for repeating letters 
There is no data type conversion
 
**Algorithm** 
- read the string left to right to keep track of freaquency of each letter 
- read the string again to find which better from left to right is the first letter that has a frequency of 1.

-------------------------------------------
low level algorithm 
- create frequency object 
- iterate through each letter in the string 
    - if a letter is a key in the string: 
        increment it's value 
    else 
        add it to the object with a value of 1 
        
- iterate through the string again 
    the first letter that has a value of 1 in the freq obj, will be returned 
    
if after iterating no letter has a value of 1, return "_"
*/

function solution(s) {
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (freq[s[i]] === 1) {
      return s[i];
    }
  }
  return "_";
}

module.exports = solution;
