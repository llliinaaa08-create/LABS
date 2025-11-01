function sumForOf(...args) {
    let total = 0;
    for (let num of args) {
        total += num;
    }
    return total;
}
const b = sumForOf(0);   
console.log(b)
