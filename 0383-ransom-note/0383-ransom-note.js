/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}

 
 */
var canConstruct = function(ransomNote, magazine) {
    const map = {}

    for (const charM of magazine) {
        map[charM] = (map[charM] || 0) + 1
    }

    for (const charR of ransomNote) {
        if (!map[charR]) return false 
        map[charR]-- 
    }
    
    return true
};