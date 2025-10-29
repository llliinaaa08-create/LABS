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
const d = sumDoWhile(1, -1, 1);
console.log(d)
