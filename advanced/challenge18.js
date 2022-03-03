const repositoryArray = require("../nodejs-repos.json");

const filteredRepositoryArray = repositoryArray.filter(
  (object) => object.forks < 50
);

console.log({
  results: filteredRepositoryArray.length,
  data: filteredRepositoryArray,
});
