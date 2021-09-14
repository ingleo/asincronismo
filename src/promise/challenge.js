const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

fetchData(API)
  .then(data1 => {
    console.log(data1.info.count);
    return fetchData(`${API}${data1.results[0].id}`);
  })
  .then(data2 => {
    console.log(data2.name);
    return fetchData(data2.origin.url);
  })
  .then(data3 => {
    console.log(data3.dimension);
  })
  .catch(err => {
    console.error(err);
  });
