/* 

A pangram is a sentence that contains every single letter of the alphabet 
at least once. For example, the sentence "The quick brown fox jumps over 
the lazy dog" is a pangram, because it uses the letters A-Z at least once
(case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it 
is, False if not. Ignore numbers and punctuation.

 */
function isPangram(string) {
    /*  
      format string to remove non-letters and standardize case, 
      turn string into an array, 
      create a set of unique array values
      then count if the length is 26
  */
    let strArray = formatString(string).split("")
    strArray = [...new Set(strArray)]
    return strArray.length === 26
}

function formatString(str) {
    return str.replace(/[^a-zA-Z]+/g, "").toLowerCase()
}
