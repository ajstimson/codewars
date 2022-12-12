/* 
Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
result should == "apples, pears\ngrapes\nbananas"

*/

//strip all text that follows any of a set of comment markers passed in, but not text after line break
//any whitespace at the end of the line should also be stripped out

function solution(input, markers) {
    // Create a regular expression that matches any of the given markers
    var regex = new RegExp(
        "(" + markers.map((m) => `[${m}]`).join("|") + ")",
        "g"
    )
    console.log(regex)

    let lines = input.split("\n")
    lines.forEach((line, i) => {
        const search = line.search(regex)
        console.log(search)
        if (search !== -1) {
            lines[i] = line.slice(0, search).trim()
            console.log(line)
        }
    })
    return lines.join("\n")
}

console.log(
    "EXPECTED: a\nc\nd $e f g",
    "\nRECEIVED: " + solution("a\nc\nd $e f g", ["#", "$"])
)
//!First attempt
// function solution(input, markers) {
//     let comment = false
//     let str = ""
//     input.split("").forEach((char) => {
//         if (markers.includes(char)) {
//             comment = true
//         }
//         if (char.match(/(\r\n|\r|\n)/g)) {
//             comment = false
//         }
//         if (!comment) {
//             str += char
//         }
//     })
//     return str.trim()
// }
