const repositoryArray = require("../nodejs-repos.json");

const filteredRepositoryArray = repositoryArray.filter(
  (object) => object.default_branch === "master"
);

const mappedRepositoryArray = filteredRepositoryArray.map((object) => {
  const { name, full_name, description, language, created_at } = object;

  return { name, full_name, description, language, created_at };
});

console.log({
  results: mappedRepositoryArray.length,
  data: mappedRepositoryArray,
});
