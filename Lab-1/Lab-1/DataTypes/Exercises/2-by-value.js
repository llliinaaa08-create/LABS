function incObject(num) {
     num.n = num.n + 1;
}

const obj = {n: 5};
incObject(obj);
console.dir(obj);
