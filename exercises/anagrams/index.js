// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const sortedStringA = stringA.replace(/[^\w]/g, "").toLocaleLowerCase().split('').sort().join("");

    const sortedStringB = stringB.replace(/[^\w]/g, "").toLocaleLowerCase().split('').sort().join("");

    return sortedStringA === sortedStringB;
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     let charMapA = {};
//
//     for (char of stringA.replace(/[^\w]/g, "").toLocaleLowerCase())
//         charMapA[char] = charMapA[char] + 1 || 1;
//
//     let charMapB = {};
//
//     for (char of stringB.replace(/[^\w]/g, "").toLocaleLowerCase())
//         charMapB[char] = charMapB[char] + 1 || 1;
//
//     for (char in charMapA)
//         if (charMapA[char] !== charMapB[char])
//             return false;
//
//     for (char in charMapB)
//         if (charMapB[char] !== charMapA[char])
//             return false;
//
//     return true;
// }

// function anagrams(stringA, stringB) {
//     let charMapA = {};
//
//     for (char of stringA.replace(/[^\w]/g, "").toLocaleLowerCase())
//         charMapA[char] = charMapA[char] + 1 || 1;
//
//     let charMapB = {};
//
//     for (char of stringB.replace(/[^\w]/g, "").toLocaleLowerCase())
//         charMapB[char] = charMapB[char] + 1 || 1;
//
//     for (char in charMapA)
//         if (charMapA[char] !== charMapB[char])
//             return false;
//
//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//         return false;
//
//     return true;
// }
