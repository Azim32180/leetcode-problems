// Most optimal solution with linear time complexity

var pivotIndex = function (nums) {
  let total = nums.reduce((acc, curr) => (acc += curr), 0);
  let leftSum = 0;

  for (let i = 0; i < nums.length; i++) {
    let rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};
