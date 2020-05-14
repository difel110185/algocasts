// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    for (let i = 0; i<n; i++) {
        let string = "";
        for (let j = 0; j<=i; j++)
            string += "#";
        for (let j = i+1; j<n; j++)
            string += " ";
        console.log(string);
    }
}

module.exports = steps;

// function steps(n) {
//     for (let i = 0; i<n; i++) {
//         let string = "";
//         for (let j = 0; j<=i; j++)
//             string += "#";
//         for (let j = i+1; j<n; j++)
//             string += " ";
//         console.log(string);
//     }
// }

// function steps(n) {
//     printStep(n, 0);
// }
//
// function printStep(pounds, spaces) {
//     let string = "";
//     for (let i = 0; i<pounds; i++)
//         string += "#";
//     for (let i = 0; i<spaces; i++)
//         string += " ";
//
//     if (pounds > 1)
//         printStep(pounds-1, spaces+1);
//
//     console.log(string);
// }

// function steps(n, row = 0, stair = '') {
//     if (n === row)
//         return;
//
//     if (n === stair.length) {
//         console.log(stair)
//         steps(n, row + 1);
//         return;
//     }
//
//     if (stair.length <= row)
//         stair += '#';
//     else
//         stair += ' ';
//
//     steps(n, row, stair);
// }
