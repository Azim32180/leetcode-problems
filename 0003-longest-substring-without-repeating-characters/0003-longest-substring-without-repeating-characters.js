/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
    let longestSub = 0 
    let set = new Set()

    let left = 0
    let right = 0 

    while (right < s.length) {

        let letter = s[right]
        
        if (!set.has(letter)) {
            set.add(letter) 

            longestSub = Math.max(longestSub, set.size)
            right++
        } else {
            set.delete(s[left])
            left++
        }

    }
    return longestSub

    
};