const Response = require('../models/response');
const { knex }= require('../config/config');

function get(req, res) {
	try {
		knex.select()
			.from('usuarios')
			.where('id',req.params.id)
			.then(usuarios =>{
				res.send(usuarios)
			});
	} catch (error) {
		console.error(error);
    res.status(500);
    res.send(new Response({ data: '', error: error, status: 500 }));
	}
}

module.exports = {
  get,
};


