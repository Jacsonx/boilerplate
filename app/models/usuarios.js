class Usuario {
  constructor(options = {}) {
		//this.data = options.data;
		this.nome = options.nome
  }

  toJSON() {
    return {
			//data: this.data
			nome: this.nome
    };
  }
}

module.exports = Usuario;