const Mongoose = require('mongoose');
const funcionarioSchema = new Mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  idade: {
    type: Number,
    required: true,
  },
  cargo: {
    type: String,
    required: true,
  }
});

module.exports = Mongoose.model('funcionario', funcionarioSchema);