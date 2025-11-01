function max(matrix) {
    let maxVal = -Infinity;
    for (let row of matrix) {
        for (let val of row) {
            if (val > maxVal) maxVal = val;
        }
    }
    return maxVal;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
