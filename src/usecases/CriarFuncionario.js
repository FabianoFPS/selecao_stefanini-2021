const { Funcionario } = require('../entities/Funcionario')

class CriarFuncionario {
  constructor({idade, nome, cargo }) {
    this.funcionario = new Funcionario({idade, nome, cargo });
  }

  execute() {
    delete this.funcionario.id;
    return this.funcionario;
  }
}

module.exports = { CriarFuncionario }