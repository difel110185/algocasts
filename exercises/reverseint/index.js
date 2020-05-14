// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let str = "";

    str += (n<0 ? -n : n);

    let reversed = str.split('').reverse().join('');

    let reversedN = parseInt(reversed);

    return (n<0 ? -reversedN : reversedN);
}

module.exports = reverseInt;

// function reverseInt(n) {
//     let str = "";
//
//     str += (n<0 ? -n : n);
//
//     let reversed = str.split('').reverse().join('');
//
//     let reversedN = parseInt(reversed);
//
//     return (n<0 ? -reversedN : reversedN);
// }

// function reverseInt(n) {
//     const reversed = n.toString().split('').reverse().join('');
//
//     return Math.sign(n) * parseInt(reversed);
// }
