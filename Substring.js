const lengthOfLongestSubstring = s => {
    // keeps track of the most recent index of each letter.
    const map = {};
    // keeps track of the starting index of the current substring.
    var left = 0;
    
    return s.split('').reduce((max, v, i) => {
        // starting index of substring is 1 + (the last index of this letter) to ensure this letter is not counted twice.
        left = map[v] >= left ? map[v] + 1 : left;
        // updates last recorded index of letter to the most recent index.
        map[v] = i;
        
        // indices of current substring is (idx - leftIdx, idx).
        // +1 because if your substring starts and ends at index 0, it still has a length of 1.
        return Math.max(max, i - left + 1);
    }, 0)
};

//or 
var lengthOfLongestSubstring = function(s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;
    
    for(let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if(seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    } 
    
    return maxLen;  
};
