class Funcionario {
  constructor({ id, idade, nome, cargo }) {
    this.id = id || '';
    this.idade = idade;
    this.nome = nome;
    this.cargo = cargo;
  }
}

module.exports = { Funcionario }