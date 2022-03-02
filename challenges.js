//////////////////////////////////////////////////////////
// 01 (FÁCIL)
console.log("01)____________________________");
const numbers = [0, 1, 2, 3, 4, 5];
console.log(`Números antigos: [${numbers}]`);

for (let i = 6; i <= 9; i++) numbers.push(i);

console.log(`Números novos: [${numbers}]`);

////////////////////////////////////////////////////////
// 02 (FÁCIL)
console.log("\n02)____________________________");
const vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(
  `Vegetais: ${vegetais[0]}, ${
    vegetais[vegetais.length - 1]
  }\nTamanho do array: ${vegetais.length} elementos`
);

////////////////////////////////////////////////////////
// 03 (FÁCIL)
console.log("\n03)____________________________");
console.log(`Índice do item "Cenoura": ${vegetais.indexOf("Cenoura")}`);

////////////////////////////////////////////////////////
// 04 (FÁCIL)
console.log("\n04)____________________________");
for (let i = 0; i < vegetais.length; i++)
  console.log(`índice ${i} = ${vegetais[i]}`);

////////////////////////////////////////////////////////
// 05 (FÁCIL)
console.log("\n05)____________________________");
function person(firtsName, lastName, email, tags) {
  return { firtsName, lastName, email, tags };
}

const person01 = person("Fulano", "de Tal", "fulano@email.com", [
  "JS",
  "Python",
  "Java",
]);
console.log(typeof person01, person01);

////////////////////////////////////////////////////////
// 06 (MÉDIO)
console.log("\n06)____________________________");
const numberGreaterThan5 = numbers.filter((element) => element > 5);
console.log(`Números maiores que 5: [${numberGreaterThan5}]`);

////////////////////////////////////////////////////////
// 07 (MÉDIO)
console.log("\n07)____________________________");
console.log(
  `Vegetal com 8 letras: ${vegetais.find((element) => element.length === 8)}`
);

////////////////////////////////////////////////////////
// 09 (MÉDIO)
console.log("\n09)____________________________");
vegetais.forEach((element, index) =>
  console.log(`índice ${index} = ${element}`)
);

////////////////////////////////////////////////////////
// 10 (MÉDIO)
console.log("\n10)____________________________");
const doubleNumber = numbers.map((element) => element * 2);
console.log(`Números x 2 = [${doubleNumber}]`);

////////////////////////////////////////////////////////
// 11 (MÉDIO)
console.log("\n11)____________________________");
function showObject(object) {
  console.table(object);
}

showObject(person01);

////////////////////////////////////////////////////////
// 12 (AVANÇADO)
console.log("\n12)____________________________");
const repositoryArray = require("./nodejs-repos.json");

let repositoryArrayFiltered01 = repositoryArray.map((object) => {
  const { name, full_name, description, language, created_at } = object;
  return { name, full_name, description, language, created_at };
});
repositoryArrayFiltered01 = repositoryArrayFiltered01.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered01);

////////////////////////////////////////////////////////
// 13 (AVANÇADO)
console.log("\n13)____________________________");
let repositoryArrayFiltered02 = repositoryArray.map((object) => {
  if (object.default_branch === "master") {
    const { name, full_name, description, language, created_at } = object;
    return { name, full_name, description, language, created_at };
  }
});

repositoryArrayFiltered02 = repositoryArrayFiltered02.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered02);

////////////////////////////////////////////////////////
// 14 (AVANÇADO)
console.log("\n14)____________________________");
let repositoryArrayFiltered03 = repositoryArray.map((object) => {
  if (!object.language) {
    const { name, full_name, description, language, created_at } = object;
    return { name, full_name, description, language, created_at };
  }
});

repositoryArrayFiltered03 = repositoryArrayFiltered03.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered03);

////////////////////////////////////////////////////////
// 15 (AVANÇADO)
console.log("\n15)____________________________");
let unlincensedCounter = 0;
repositoryArray.map((object) => {
  if (!object.license) unlincensedCounter++;
});

console.log(
  `Quantidade de repositórios que possuem o campo license como nulo: ${unlincensedCounter}`
);
