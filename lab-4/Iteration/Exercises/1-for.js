function sumFor(...args) {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
}
const a = sumFor(1, 2, 3);
console.log(a)