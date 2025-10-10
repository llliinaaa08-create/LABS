function range(start, end) {
  let numbers = [];
  for (let i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

function rangeOdd(start, end) {
  let oddNumbers = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }
  return oddNumbers;
}

console.log("Масив усіх чисел:", range(15, 30));
console.log("Масив непарних чисел:", rangeOdd(15, 30));
