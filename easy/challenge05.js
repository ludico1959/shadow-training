function person(firstName, lastName, email, tags) {
  return { firstName, lastName, email, tags };
}

const person01 = person("Fulano", "de Tal", "fulano@email.com", [
  "JS",
  "Python",
  "Java",
]);

console.log(typeof person01, person01);
