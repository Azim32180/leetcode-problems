/*
Given an integer **`n`**, find the difference between the sums of its even and odd digits.

Example

- For **`n = 412`**, the output should be **`solution(n) = 5`**.
    - The even digits are **`4`** and **`2`** and the odd digit is **`1`**. Therefore **`(4 + 2) - (1) = 5`**.
- For **`n = 1203`**, the output should be **`solution(n) = -2`**.
    - The even digits are **`2`** and **`0`** and the odd digits are **`1`**and **`3`**. Therefore **`(2 + 0) - (1 + 3) = -2`**.
*/

function solution(n) {
  let nStr = String(n);
  let evenSum = 0;
  let oddSum = 0;

  for (const char of nStr) {
    if (char % 2 === 0) {
      // if even
      evenSum += Number(char);
    } else {
      // if odd
      oddSum += Number(char);
    }
  }

  return evenSum - oddSum;
}

module.exports = solution;
