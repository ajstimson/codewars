/* 
Roman Numerals Encoder
Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. 
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman 
symbol in descending order: MDCLXVI.

Example:

solution(1000); // should return 'M'
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
Remember that there can't be more than 3 identical symbols in a row.

More about roman numerals - http://en.wikipedia.org/wiki/Roman_numerals
*/

const helper = (n, pre, rep) => {
    const pos = n > 5 && n - 5
    return n >= 5
        ? pre + rep.repeat(pos)
        : n === 4
        ? rep + pre
        : n === 1
        ? rep
        : rep.repeat(n)
}

// Define the function
const evaluateN = (n, length) => {
    // Initialize an empty string to store the result
    let res = ""
    n = parseInt(n)
    if (n < 1) return
    // Use the "switch" statement to evaluate the value of the "length" parameter
    switch (length) {
        // If the length is 4, evaluate the thousands place
        case 4:
            //Instructions aren't clear if n > 2000 is expected
            res = n > 1 ? "MM" : "M"
            break
        // If the length is 3, evaluate the hundreds place
        case 3:
            res = n === 9 ? "CM" : helper(n, "D", "C")
            break
        // If the length is 2, evaluate the tens place
        case 2:
            res = n === 9 ? "LC" : helper(n, "L", "X")

        // If the length is none of the above, evaluate the 0-9 place
        default:
            res = n === 9 ? "VX" : helper(n, "V", "I")
    }

    // Return the result
    return res
}

function solution(number) {
    let length = number.toString().length + 1
    let rom = ""
    number
        .toString()
        .split("")
        .forEach((x) => {
            //decrement length
            length--
            const numeral = evaluateN(x, length)
            if (numeral !== undefined) rom += numeral
        })

    return rom
}

console.log(solution(5), "expected V")

// Idea 1
/* 
    split the numeral into an array
    get length - evaluate the first value to determine if 1000s, 500s, 100s, 50s, 10s, 5s, 1s
    once we are in thousands, determine potential value
    2000 = MM, 1000 = M
    900 = CM, 800 = DCCC, 700 = DCC, 600 = DC, D, 400 = CD, 300 = CCC, 200 = CC, 100 = C
    90 (LC), 80(LXXX), 70(LXX), 60(LX), 50 (L), 40 (XL), 30 (XXX), 20 (XX), 10(X) 
*/
