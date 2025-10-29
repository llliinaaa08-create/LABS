// 1.1 Цикл for
function sumFor(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}

// 1.2 Цикл for..of
function sumForOf(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}

// 1.3 Цикл while
function sumWhile(...args) {
    let total = 0;
    let i = 0;
    while (i < args.length) {
        total += args[i];
        i++;
    }
    return total;
}

// 1.4 Цикл do..while
function sumDoWhile(...args) {
    let total = 0;
    let i = 0;
    if (args.length === 0) return 0;
    do {
        total += args[i];
        i++;
    } while (i < args.length);
    return total;
}

// 1.5 Метод reduce()
function sumReduce(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// Приклади викликів:
const a = sumFor(1, 2, 3);       // 6
const b = sumForOf(0);           // 0
const c = sumWhile();             // 0
const d = sumDoWhile(1, -1, 1);   // 1
const e = sumReduce(10, -1, -1, -1); // 7

console.log(a, b, c, d, e);





