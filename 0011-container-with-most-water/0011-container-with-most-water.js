/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
// declare two pointers 

let left = 0 
let right = height.length - 1

let maxWater = 0 

while (left < right) {

    let w = right - left
    let h = Math.min(height[left], height[right])

    let currWater = w * h 

    maxWater = Math.max(maxWater, currWater)

    if (height[left] < height[right]) {
        left++
    } else {
        right--
    }
}
return maxWater


};