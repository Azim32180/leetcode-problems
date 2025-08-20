const solution = (numbers) => {
  // Check if the input array has fewer than 2 elements
  if (numbers.length < 2) {
    return numbers; // Return the input as is
  }

  // Initialize the two groups
  const res1 = [numbers[0]]; // Start with the first element
  const res2 = [numbers[1]]; // Start with the second element

  // Iterate over the remaining elements
  for (let i = 2; i < numbers.length; i++) {
    // Count how many numbers in res1 and res2 are greater than numbers[i]
    const countGreaterInRes1 = res1.filter((x) => x > numbers[i]).length;
    const countGreaterInRes2 = res2.filter((x) => x > numbers[i]).length;

    // Decide where to place numbers[i] based on the counts
    if (countGreaterInRes1 < countGreaterInRes2) {
      res2.push(numbers[i]); // Add to res2 if res1 has fewer "greater numbers"
    } else if (countGreaterInRes1 > countGreaterInRes2) {
      res1.push(numbers[i]); // Add to res1 if res2 has fewer "greater numbers"
    } else {
      // If counts are equal, balance based on array lengths
      if (res1.length < res2.length) {
        res1.push(numbers[i]); // Add to res1 if it has fewer elements
      } else if (res1.length > res2.length) {
        res2.push(numbers[i]); // Add to res2 if it has fewer elements
      } else {
        res1.push(numbers[i]); // Default to adding to res1
      }
    }
  }

  // Combine the two groups and return the result
  return res1.concat(res2);
};

module.exports = solution;
