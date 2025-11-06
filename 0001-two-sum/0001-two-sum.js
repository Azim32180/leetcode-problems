/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

let obj = {}

for (let i = 0; i < nums.length; i++) {

    const compliment = target - nums[i] 

    if (compliment in obj) return [obj[compliment], i]

    obj[nums[i]] = i
}

};