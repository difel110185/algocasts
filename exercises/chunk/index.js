// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let bigArray = [];

    for (let i = 0; i < array.length; i = i + size) {
        bigArray[Math.floor(i / size)] = [];
        for (let j = 0; j < size; j++) {
            bigArray[Math.floor(i / size)][j] = array[i + j];
            if (!array[i + j + 1])
                break;
        }
    }

    return bigArray;
}

module.exports = chunk;

// function chunk(array, size) {
//     let bigArray = [];
//
//     for (let i = 0; i < array.length; i = i + size) {
//         bigArray[Math.floor(i / size)] = [];
//         for (let j = 0; j < size; j++) {
//             bigArray[Math.floor(i / size)][j] = array[i + j];
//             if (!array[i + j + 1])
//                 break;
//         }
//     }
//
//     return bigArray;
// }

// function chunk(array, size) {
//     let chuncked = [];
//
//     for (let i = 0; i < array.length; i += size)
//         chuncked.push(array.slice(i, i + size));
//
//     return chuncked;
// }

// function chunk(array, size) {
//     let chuncked = [];
//
//     for (let element of array) {
//         const last = chuncked[chuncked.length -1];
//
//         if (!last || last.length === size)
//             chuncked.push([element]);
//         else
//             last.push(element);
//     }
//
//     return chuncked;
// }
