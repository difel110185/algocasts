// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for (let i = 0; i<arr.length; i++)
        for (let j = 0; j<arr.length-i; j++)
            if (arr[j] > arr[j+1]) {
                let aux = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = aux;
            }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i<arr.length; i++) {
        let minIndex = i;

        for (let j = i+1; j<arr.length; j++)
            if (arr[j] < arr[minIndex])
                minIndex = j;

        if (i !== minIndex) {
            let aux = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = aux;
        }
    }

    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1)
        return arr;

    const midIndex = Math.floor(arr.length/2);

    return merge(mergeSort(arr.slice(0, midIndex)), mergeSort(arr.slice(midIndex, arr.length)));
}

function merge(left, right) {
    let merged = [];

    while (left.length && right.length)
        if (left[0] < right[0])
            merged.push(left.shift());
        else
            merged.push(right.shift());

    return [...merged, ...left, ...right];
}

// function merge(left, right) {
//     let merged = [];
//
//     let i = 0;
//     let j = 0;
//
//     while (merged.length < left.length + right.length) {
//         if (!right[j] || left[i] < right[j]) {
//             merged.push(left[i]);
//             i++;
//         }
//         else if (!left[i] || left[i] > right[j]) {
//             merged.push(right[j]);
//             j++;
//         }
//     }
//
//     return merged;
// }

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
