/*  
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
    The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
const zeroPad = (num, places) => String(num).padStart(places, "0")

function humanReadable(seconds) {
    var hours = Math.floor(seconds / 3600)
    seconds = seconds - hours * 3600
    const min = Math.floor(seconds / 60)
    seconds = seconds - min * 60
    return `${zeroPad(hours, 2)}:${zeroPad(min, 2)}:${zeroPad(
        Math.floor(seconds),
        2
    )}`
}
console.log(humanReadable(359999))
