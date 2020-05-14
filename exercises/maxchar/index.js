// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let count = {};

    for (char of str)
        count[char] = (count[char] ? count[char] + 1 : 1);

    let maxChar = "";
    let maxCharCount = 0;
    for (key of Object.keys(count))
        if (count[key] > maxCharCount) {
            maxChar = key;
            maxCharCount = count[key];
        }

    return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//     let count = {};
//
//     for (char of str)
//         count[char] = (count[char] ? count[char] + 1 : 1);
//
//     let maxChar = "";
//     let maxCharCount = 0;
//     for (key of Object.keys(count))
//         if (count[key] > maxCharCount) {
//             maxChar = key;
//             maxCharCount = count[key];
//         }
//
//     return maxChar;
// }

// function maxChar(str) {
//     let count = {};
//
//     for (char of str)
//         count[char] = count[char] + 1 || 1;
//
//     let maxChar = "";
//     let maxCharCount = 0;
//     for (key in count)
//         if (count[key] > maxCharCount) {
//             maxChar = key;
//             maxCharCount = count[key];
//         }
//
//     return maxChar;
// }
