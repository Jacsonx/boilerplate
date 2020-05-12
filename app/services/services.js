const Response = require('../models/response');
const conn = require('../config/config');

async function get(req, res) {
	try {
		await	conn.knex.select('username').from('usuarios').on('query-response', response => {
			res.status(200);
			res.send(new Response({ data: response, error: '', status: 200 }));
			console.log(response);
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


