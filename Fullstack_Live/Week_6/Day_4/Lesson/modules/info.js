const axios = require("axios");

// Faz uma requisição a um usuarío com um ID expecifico
axios.get('https://jsonplaceholder.typicode.com/users?id=1')
    .then(response => console.log(response.data)) // Use .data to access the actual payload
    .catch(error => console.error(error))
    .finally(() => console.log("Request completed."));

// Opcionalmente a requisição acima poderia ser feita assim da seguinte forma
axios.get('https://jsonplaceholder.typicode.com/users/', {
    params: { id: 12345 }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error(error))
  .finally(() => console.log("Request with params completed."));

// Quer usar async/await? Adicione o prefixo `async` na sua função/método
async function getUser() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users?id=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

module.exports = {
    getUser,
}