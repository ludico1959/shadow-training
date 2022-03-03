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

// console.log(
//   crud.create({
//     firstName: "Fulano",
//     lastName: "de Tal",
//     email: "fulano@email.com",
//     tags: ["JS", "Python", "Java"],
//   })
// );

// Testando as funções do CRUD:
// console.log(
//   crud.create({
//     firstName: "Ciclano",
//     lastName: "de Tal",
//     email: "ciclano@email.com",
//     tags: ["Rust", "Python", "C"],
//   })
// );
// // console.log(crud.read({ firstName: "Ciclano" }));
