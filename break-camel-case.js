/* 
* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  "" 
*/

// complete the function
function solution(string) {
    return string
        .split("")
        .map((char, i) => (i !== 0 && char.match(/[A-Z]/g) ? " " + char : char))
        .join("")
}

console.log(solution("camelCase"))
console.log(solution("mickeyMouseHouse"))
console.log(solution("null"))
console.log(solution("Pumpernickel"))
