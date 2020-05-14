function numberAmazonTreasureTrucks(rows, column, grid) {
    let parkNodes = [];
    let result = 0;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < column; j++) {
            if (grid[i][j] === 1) {
                parkNodes.push(getString(i,j));

                if (!parkNodes.includes(getString(i-1,j)) && !parkNodes.includes(getString(i+1,j))
                    && !parkNodes.includes(getString(i,j-1)) && !parkNodes.includes(getString(i,j+1))) {
                    result++;
                }
            }
        }
    }

    return result;
}

function getString(i,j) {
    return i.toString() + "-" + j.toString();
}

numberAmazonTreasureTrucks(4,4)
