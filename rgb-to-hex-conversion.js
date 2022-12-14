/*  
 * RGB To Hex Conversion
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

const range = (x) => {
    return x > 255 ? 255 : x < 0 ? 0 : x
}
function rgb(r, g, b) {
    // complete this function
    rgbArr = [r, g, b]
    const corrected = rgbArr.map((x) => {
        const result = range(x).toString(16)
        return result.length < 2 ? 0 + result : result
    })

    return corrected.join("").toUpperCase()
}
