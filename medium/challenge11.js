// Challenge 05
function person(firstName, lastName, email, tags) {
  return { firstName, lastName, email, tags };
}

const person01 = person("Fulano", "de Tal", "fulano@email.com", [
  "JS",
  "Python",
  "Java",
]);

// Challenge 11
function showObject(object) {
  console.table(object);
}

showObject(person01);
