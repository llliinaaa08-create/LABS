let myName = "Аліна";
const birthYear = 2008;

function greet(name) {
  console.log("Привіт, " + name + "!");
}

greet(myName);


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


function fn() {
  const objConst = { name: "Damon Salvatore" };
  let objLet = { name: "Damon Salvatore" };

  objConst.name = "Damon Salvatore";
  objLet.name = "Damon Salvatore";

  console.log(objConst);
  console.log(objLet);
}

fn();

function createUser(name, city) {
  return { name: name, city: city };
}

console.log(createUser("Damon Salvatore", "Mystic Falls"));


const phoneBookArray = [
  { name: "Damon Salvatore", phone: "+380501112233" },
  { name: "Alina Horban", phone: "+380971897844" },
  { name: "Stefan Salvatore", phone: "+380507776655" }
];

function findPhoneByNameArray(name) {
  for (let i = 0; i < phoneBookArray.length; i++) {
    if (phoneBookArray[i].name === name) {
      return phoneBookArray[i].phone;
    }
  }
  return "Not found";
}

console.log(findPhoneByNameArray("Alina Horban")); 

const phoneBookHash = {
  "Damon Salvatore": "+380501112233",
  "Alina Horban": "380971897844",
  "Stefan Salvatore": "+380507776655"
};

function findPhoneByNameHash(name) {
  return phoneBookHash[name] || "Not found";
}

console.log(findPhoneByNameHash("Alina Horban")); 