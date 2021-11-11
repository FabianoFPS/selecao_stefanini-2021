class EditarFuncionario {
  constructor(funcionario){
    this.funcionario = funcionario;
  }

  execute() {
    const funcionario = JSON.parse(this.funcionario)
    console.log(this.funcionario, funcionario);
    return funcionario;
  }
}

module.exports = { EditarFuncionario }