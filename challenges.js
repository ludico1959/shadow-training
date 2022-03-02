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
function person(firstName, lastName, email, tags) {
  return { firstName, lastName, email, tags };
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

////////////////////////////////////////////////////////
// 16 (AVANÇADO)
console.log("\n16)____________________________");
let repositoryArrayFiltered04 = repositoryArray.map((object) => {
  if (object.license) {
    if (object.license.key === "mit") {
      const { name, full_name, description, language, created_at, license } =
        object;
      return {
        name,
        full_name,
        description,
        language,
        created_at,
        license_url: license.url,
      };
    }
  }
});

repositoryArrayFiltered04 = repositoryArrayFiltered04.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered04);

////////////////////////////////////////////////////////
// 17 (AVANÇADO)
console.log("\n17)____________________________");
const languages = ["CSS", "Python"];

let repositoryArrayFiltered05 = repositoryArray.map((object) => {
  if (languages.includes(object.language)) {
    const { name, full_name, language, has_issues, has_projects } = object;
    return { name, full_name, language, has_issues, has_projects };
  }
});

repositoryArrayFiltered05 = repositoryArrayFiltered05.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered05);

////////////////////////////////////////////////////////
// 18 (AVANÇADO)
console.log("\n18)____________________________");
let repositoryArrayFiltered06 = repositoryArray.map((object) => {
  if (object.forks < 50) return object;
});

repositoryArrayFiltered06 = repositoryArrayFiltered06.filter(
  (element) => element !== undefined
);
// console.log(repositoryArrayFiltered06);

////////////////////////////////////////////////////////
// 19 (AVANÇADO)
console.log("\n19)____________________________");
const database = [];

const crud = {
  create: function (person) {
    database.push(person);
    return person;
  },

  read: function (properties) {
    let filteredDatabase = [];

    if (properties) {
      filteredDatabase = database.filter((object) => {
        if (properties.firstName === object.firstName) return object;
        else if (properties.lastName === object.lastName) return object;
        else if (properties.email === object.email) return object;
        else if (properties.tags === object.tags) return object;
      });

      return filteredDatabase;
    } else {
      return database;
    }
  },

  update: function (index, person) {
    const updatedPerson = database[index];
    updatedPerson.firstName = person.firstName
      ? person.firstName
      : updatedPerson.firstName;

    updatedPerson.lastName = person.lastName
      ? person.lastName
      : updatedPerson.lastName;

    updatedPerson.email = person.email ? person.email : updatedPerson.email;

    updatedPerson.tags = person.tags ? person.tags : updatedPerson.tags;

    database[index] = updatedPerson;
  },

  delete: function (index) {
    delete database[index];
  },
};

console.log(
  crud.create({
    firstName: "Fulano",
    lastName: "de Tal",
    email: "fulano@email.com",
    tags: ["JS", "Python", "Java"],
  })
);

// Testando as funções do CRUD:
console.log(
  crud.create({
    firstName: "Ciclano",
    lastName: "de Tal",
    email: "ciclano@email.com",
    tags: ["Rust", "Python", "C"],
  })
);
console.log(crud.read({ firstName: "Ciclano" }));
