'use strict';

const { FuncionarioController } = require('./src/controllers/FuncionarioController');

module.exports.api = async (event) => {
  function send(body) {
    return {
      statusCode: 200,
      body: JSON.stringify(body,
        null,
        2
      ),
    };
  }
  
  const funcionarioController = new FuncionarioController();
  const { httpMethod } = event;

  const router = {
    GET: async () => send(await funcionarioController.encontrarFuncionario(event.multiValueQueryStringParameters)),
    POST: async () => send(await funcionarioController.criaFuncionario(event.body)),
    DELETE: async () => send(await funcionarioController.deletarFuncionario(event.pathParameters.id)),
    PUT: async () => send(await funcionarioController.editarFuncionario(event.pathParameters.id, event.body))
  }

  return router[httpMethod]();
};
