'use strict';

const { CriarFuncionario } = require('../usecases/CriarFuncionario');
const { EncontrarFuncionario } = require('../usecases/EncontrarFuncionario');
const { DeletarFuncionario } = require('../usecases/DeletarFuncionario');
const { EditarFuncionario } = require('../usecases/EditarFuncionario');
const { MongoDB } = require('../database/database');
const funcionarioSchema = require('../database/funcionarioSchema');


class FuncionarioController {
  constructor() {
    const connection = MongoDB.connect();
    this.database = new MongoDB(connection, funcionarioSchema);
  }

  async criaFuncionario(dadosFuncionario) {
    const objFuncionario = JSON.parse(dadosFuncionario)

    const criarFuncionario = new CriarFuncionario(objFuncionario);
    const funcionario = criarFuncionario.execute()

    const funcionarioCriado = await this.database.create(funcionario)
    const { _id: id, nome, idade, cargo } = funcionarioCriado;

    return { id, nome, cargo, idade };
  }

  async encontrarFuncionario(parametro) {
    const nome = parametro.nome[0];
    const result = await this.database.read({ nome })
    const encontrarFuncionario = new EncontrarFuncionario(result)

    return encontrarFuncionario.execute();
  }

  async deletarFuncionario(id) {
    const result = await this.database.delete(id)
    return result
  }

  async editarFuncionario(id, dados) {
    const editaFuncionario = new EditarFuncionario(dados)
    const funcionario = editaFuncionario.execute();
    const result = await this.database.update(id, funcionario)

    return result
  }

  async closedb() {
    this.database.close()
  }
}

module.exports = { FuncionarioController }