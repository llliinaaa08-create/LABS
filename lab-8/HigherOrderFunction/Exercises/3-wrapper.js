function contract(fn, ...types) {
  return function(...args) {
    for (let i = 0; i < args.length; i++) {
      if (i < types.length - 1 && typeof args[i] !== types[i].name.toLowerCase()) {
        throw new TypeError(`Argument ${i} must be ${types[i].name}`);
      }
    }
    const result = fn(...args);
    const expectedType = types[types.length - 1].name.toLowerCase();
    if (typeof result !== expectedType) {
      throw new TypeError(`Return value must be ${expectedType}`);
    }
    return result;
  };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3));

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
console.log(concatStrings('Hello ', 'world!'));
