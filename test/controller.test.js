const { FuncionarioController } = require('../src/controllers/FuncionarioController');

describe('FuncioarioController', () => {
  let funcionarioController;

  beforeAll(() => {
    funcionarioController = new FuncionarioController();
  })

  afterAll(() => {
    funcionarioController.closedb()
  })

  test('Criar Funcionário', async () => {
    const funcionario = {
      nome: 'Fulano de Tal',
      idade: 35,
      cargo: 'Motorista'
    }

    const body = JSON.stringify(funcionario)
    const resultado = await funcionarioController.criaFuncionario(body)
    expect(resultado).toMatchObject(funcionario);
  })

  test('Localizar Funcionário', async () => {
    const funcionario = {
      nome: 'Zeca Pagodinho',
      idade: 57,
      cargo: 'Contador'
    }

    const parametro = {
      nome: ['Zeca Pagodinho']
    }

    const body = JSON.stringify(funcionario)
    await funcionarioController.criaFuncionario(body)

    const resultado = await funcionarioController.encontrarFuncionario(parametro)
    expect(resultado).toMatchObject(funcionario);
  })

  test('Editar Funciário', async () => {
    const funcionario = {
      nome: 'Fulano de Tal',
      idade: 35,
      cargo: 'Motorista'
    }

    const novosDados = {
      nome: 'Zeca Pagodinho',
      idade: 57,
      cargo: 'Contador'
    };

    let body = JSON.stringify(funcionario)
    const editar = await funcionarioController.criaFuncionario(body)
    body = JSON.stringify(novosDados)
    const resultado = await funcionarioController.editarFuncionario(editar.id, body);
    expect(resultado.modifiedCount).toBe(1);
  })

  test('Deletar Funciário', async () => {
    const funcionario = {
      nome: 'Fulano de Tal',
      idade: 35,
      cargo: 'Motorista'
    }

    const body = JSON.stringify(funcionario)
    const deletar = await funcionarioController.criaFuncionario(body)
    const resultado = await funcionarioController.deletarFuncionario(deletar.id)
    expect(resultado.deletedCount).toBe(1);
  })
})