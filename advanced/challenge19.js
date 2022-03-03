const database = [];

const crud = {
  create: function (person) {
    database.push(person);
    return {
      status: "success",
      data: person,
    };
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

      return {
        status: "success",
        results: filteredDatabase.length,
        data: filteredDatabase,
      };
    } else {
      return {
        status: "success",
        results: database.length,
        data: database,
      };
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

    return {
      status: "success",
      result: database[index],
    };
  },

  delete: function (index) {
    delete database[index];

    return {
      status: "success",
      data: null,
    };
  },
};

///////////////////////////////////////////
// CREATE
// console.log(
//   crud.create({
//     firstName: "Fulano",
//     lastName: "de Tal",
//     email: "fulano@email.com",
//     tags: ["JS", "Python", "Java"],
//   })
// );

// console.log(
//   crud.create({
//     firstName: "Ciclano",
//     lastName: "de Tal",
//     email: "ciclano@email.com",
//     tags: ["Rust", "Python", "C"],
//   })
// );

///////////////////////////////////////////
// READE
// console.log(crud.read({ firstName: "Ciclano" }));

///////////////////////////////////////////
// UPDATE
// console.log(crud.update(0, { firstName: "Aucides" }));

///////////////////////////////////////////
// DELETE
// console.log(crud.delete(0));
