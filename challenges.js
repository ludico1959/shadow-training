////////////////////////////////////////////////////////
// 01
console.log("1)____________________________");
const numbers = [0, 1, 2, 3, 4, 5];
console.log(`number: [${numbers}]`);

for (let i = 6; i <= 9; i++) numbers.push(i);

console.log(`number: [${numbers}]`);

////////////////////////////////////////////////////////
// 02
console.log("\n2)____________________________");
const vegetais = ["Repolho", "Nabo", "Rabanete", "Cenoura"];
console.log(
  `Vegetais: ${vegetais[0]}, ${
    vegetais[vegetais.length - 1]
  }\nTamanho do array: ${vegetais.length} elementos`
);

////////////////////////////////////////////////////////
// 03
console.log("\n3)____________________________");
console.log(`Índice do item "Cenoura": ${vegetais.indexOf("Cenoura")}`);

////////////////////////////////////////////////////////
// 04
console.log("\n4)____________________________");
for (let i = 0; i < vegetais.length; i++)
  console.log(`índice ${i} = ${vegetais[i]}`);

////////////////////////////////////////////////////////
// 05
console.log("\n5)____________________________");
function person(firtsName, lastName, email, tags) {
  return { firtsName, lastName, email, tags };
}

const person01 = person("Fulano", "de Tal", "fulano@email.com", [
  "JS",
  "Python",
  "Java",
]);
console.log(typeof person01, person01);
