const repositoryArray = require("../nodejs-repos.json");

const languages = ["CSS", "Python"];

const filteredRepositoryArray = repositoryArray.filter((object) =>
  languages.includes(object.language)
);

const mappedRepositoryArray = filteredRepositoryArray.map((object) => {
  const { name, full_name, language, has_issues, has_projects } = object;

  return { name, full_name, language, has_issues, has_projects };
});

console.log({
  results: mappedRepositoryArray.length,
  data: mappedRepositoryArray,
});
