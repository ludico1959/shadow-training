const repositoryArray = require("../nodejs-repos.json");

const filteredRepositoryArray = repositoryArray.filter((object) => {
  if (object.license) if (object.license.key === "mit") return true;
});

const mappedRepositoryArray = filteredRepositoryArray.map((object) => {
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
});

console.log({
  results: mappedRepositoryArray.length,
  data: mappedRepositoryArray,
});
