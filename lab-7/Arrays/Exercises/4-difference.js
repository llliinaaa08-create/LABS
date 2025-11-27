function difference(array1, array2) {
  return array1.filter(el => !array2.includes(el));
}

console.log(difference([7, -2, 10, 5, 0], [0, 10]));
console.log(difference(['Beijing', 'Kiev'], ['London', 'Baghdad']));
