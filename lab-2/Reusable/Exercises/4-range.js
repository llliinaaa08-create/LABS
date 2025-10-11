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
