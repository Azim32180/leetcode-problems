var twoSum = function (nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const rem = target - nums[i];

    if (map[rem] !== undefined) {
      return [map[rem], i];
    }

    map[nums[i]] = i;
  }
};

module.exports = twoSum;
