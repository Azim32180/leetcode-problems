/*
Given an array of integers **`numbers`**, compare the sum of elements on even positions against the sum of elements on odd positions (**`0`**-based). Return **`"even"`** if the sum of elements on even positions is greater, **`"odd"`** if the sum of elements on odd positions is greater, or **`"equal"`** if both sums are equal.

Example

- For **`numbers = [1, 2, 3, 4, 5]`**, the output should be **`solution(numbers) = "even"`**.
    
    **Explanation:**
    
    - Sum of elements on even positions is **`1 + 3 + 5 = 9`**.
    - Sum of elements on odd positions is **`2 + 4 = 6`**.
    - **`9 > 6`**, so the expected output is **`"even"`**.
- For **`numbers = [-1, 4, 3, -2]`**, the output should be **`solution(numbers) = "equal"`**.
    
    **Explanation:**
    
    - Sum of elements on even positions is **`(-1) + 3 = 2`**.
    - Sum of elements on odd positions is **`4 + (-2) = 2`**.
    - **`2 = 2`**, so the expected output is **`"equal"`***/

/* 

PEDAC

Problem: 
- input: array of integers 
- output: string 

Simplify the problem to one sentence: 
summing the even positioned elements and odd positioned elements, which sum is larger or is it equal?

Examples / Edge Cases: 
- numbers = [-1, 4, 3, -2]
- solution(numbers) = "equal"

Explanation: 
Even indexed elements: (-1) + 3 = 2
Odd indexed elements: 4 + (-2) = 2
2 = 2 out is "equal"

Algorithm:
- create even and odd variables that start at zero
- iterate through the numbers array using for loop
    - write if statement to identify and separate and sum even and odd indexed postions
    - 

*/

function solution(numbers) {
  let even = 0;
  let odd = 0;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (i % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }

  if (even > odd) return "even";
  if (even < odd) return "odd";
  if (even === odd) return "equal";
}

module.exports = solution;
