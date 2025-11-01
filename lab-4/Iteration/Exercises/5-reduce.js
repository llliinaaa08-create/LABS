function sumReduce(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}
const e = sumReduce(10, -1, -1, -1)
console.log(e)
