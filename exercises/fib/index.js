// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    let fibCalc = [];
    fibCalc[0] = 0;
    fibCalc[1] = 1;

    for (let i = 2; i<=n ; i++)
        fibCalc[i] = fibCalc[i-1] + fibCalc[i-2];

    return fibCalc[n];
}

module.exports = fib;

// function fib(n) {
//     if (n === 0 || n === 1)
//         return n;
//
//     return fib(n-1) + fib(n-2)
// }
