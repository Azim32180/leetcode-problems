// Beginner friendly solution but quadratic time complexity

var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // sum left side
    let lsum = 0;
    for (let j = 0; j < i; j++) {
      lsum += nums[j];
    }

    // sum right side
    let rsum = 0;
    for (let k = i + 1; k < nums.length; k++) {
      rsum += nums[k];
    }

    // check if they match
    if (lsum === rsum) {
      return i;
    }
  }
  return -1;
};
