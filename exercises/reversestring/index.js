// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split('');
    let reversed = "";
    for(var i = arr.length-1; i>=0; i--)
        reversed += arr[i];

    return reversed;
}

module.exports = reverse;

// function reverse(str) {
    //return str.split('').reverse().join('');
// }

// function reverse(str) {
//     const arr = str.split('');
//     let reversed = "";
//     for(var i = arr.length-1; i>=0; i--)
//         reversed += arr[i];
//
//     return reversed;
// }

// function reverse(str) {
//     let reversed = '';
//
//     for (let char of str)
//         reversed = char + reversed;
//
//     return reversed;
// }

// function reverse(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '')
// }
