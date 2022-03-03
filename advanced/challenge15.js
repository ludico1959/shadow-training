const repositoryArray = require("../nodejs-repos.json");

let unlincensedRepositoryCounter = 0;

repositoryArray.map((object) => {
  if (!object.license) unlincensedRepositoryCounter++;
});

console.log(
  `Quantidade de repositórios sem licença: ${unlincensedRepositoryCounter}`
);
