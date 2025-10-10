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
