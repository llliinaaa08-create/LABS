const pipe = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('All arguments must be functions');
  }
  return x => fns.reduce((v, fn) => fn(v), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const a = pipe(inc, twice, cube);
console.log(a(5));
const b = pipe(inc, inc);
console.log(b(7));

