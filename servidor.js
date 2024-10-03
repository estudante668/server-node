/**
 * 
 */
const http = require('http');

const recebeRequisicao = (req, res)=> {
	res.statusCode = 200;
	res.end("requisição exibida");
}

const server = http.createServer(recebeRequisicao);

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000/');
});
