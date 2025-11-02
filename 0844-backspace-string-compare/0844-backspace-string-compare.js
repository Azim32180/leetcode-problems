/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}

 */
var backspaceCompare = function(s, t) {

    const sStack = []

    for (const c of s) { 
        if (c === "#") {
            sStack.pop()
        } else {
            sStack.push(c)
        }
    }

    const tStack = []

    for (const c of t) { 
        if (c === "#") {
            tStack.pop()
        } else {
            tStack.push(c)
        }
    }

    if (sStack.length !== tStack.length) return false 

    while (sStack.length > 0) {
        if (sStack.pop() !== tStack.pop()) return false
    }
    return true
};