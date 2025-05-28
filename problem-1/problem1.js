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
