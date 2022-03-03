const repositoryArray = require("../nodejs-repos.json");

const mappedRepositoryArray = repositoryArray.map((object) => {
  const { name, full_name, description, language, created_at } = object;

  return { name, full_name, description, language, created_at };
});

console.log({
  results: mappedRepositoryArray.length,
  data: mappedRepositoryArray,
});
