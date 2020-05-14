function minimumHours(rows, columns, grid) {
    let maxDistanceBetween0And1 = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (grid[i][j] === 0) {
                const dist = distanceToNearestOne(grid, i, j, rows, columns, {});
                if (dist > maxDistanceBetween0And1)
                    maxDistanceBetween0And1 = dist;
            }
        }
    }

    return maxDistanceBetween0And1;
}

function distanceToNearestOne(grid, i, j, rows, columns, calculated) {
    if (calculated[i + ',' + j])
        return 10000000;

    if (grid[i][j] === 1)
        return 0;

    if ((i > 0 && grid[i-1][j] === 1) ||
        (i < rows-1 && grid[i+1][j] === 1) ||
        (j > 0 && grid[i][j-1] === 1) ||
        (j < columns-1 && grid[i][j+1] === 1))
        return 1;

    calculated[i + ',' + j] = 1;

    return 1 + Math.min(
        (i > 0 ? distanceToNearestOne(grid, i-1, j, rows, columns, calculated) : 10000000),
        (i < rows-1 ? distanceToNearestOne(grid, i+1, j, rows, columns, calculated) : 10000000),
        (j > 0 ? distanceToNearestOne(grid, i, j-1, rows, columns, calculated) : 10000000),
        (j < columns-1 ? distanceToNearestOne(grid, i, j+1, rows, columns, calculated) : 10000000)
    );
}

let grid = [
    [0,0,1,0,0,0],
    [0,0,0,0,0,0],
    [0,0,0,0,0,1],
    [0,0,0,0,0,0],
    [0,1,0,0,0,0],
];

console.log(minimumHours(5,6,grid));
