const { Funcionario } = require('../entities/Funcionario');

class EncontrarFuncionario {
  constructor(funcionario) {
    this.funcionario = funcionario
  }

  execute() {
    if(this.funcionario) {
      const { _id: id, nome, idade, cargo } = this.funcionario;
      return new Funcionario({ id, nome, cargo, idade });
    }
    return this.funcionario
  }
}

module.exports = { EncontrarFuncionario }