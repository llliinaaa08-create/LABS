function average(a, b) {
  return (a + b) / 2;
}

function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

function calculate() {
  let results = [];
  for (let i = 0; i <= 9; i++) {
    let avg = average(square(i), cube(i));
    results.push(avg);
  }
  return results;
}

console.log(calculate());