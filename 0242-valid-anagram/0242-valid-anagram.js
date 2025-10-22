/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
if (s.length !== t.length) {
    return false
}
const sFreq = {} 
const tFreq = {}

for (let i = 0; i < s.length; i++) {
    let char = s[i]
    if (sFreq[char]) {
        sFreq[char] ++ 
    } else {
        sFreq[char] = 1
    }
}
for (let i = 0; i < t.length; i++) {
    let char = t[i]
    if (tFreq[char]) {
        tFreq[char] ++
    } else {
        tFreq[char] = 1
    }
}

for (const key of Object.keys(tFreq)) {
    if (sFreq[key] !== tFreq[key]) {
        return false
    }
}
return true
}