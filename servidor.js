/**
 * 
 */
const http = require('http');

const recebeRequisicao = (req, res)=> {
	res.writeHead(200);
	res.write("Meu servdor conexão")
	res.end();
}

const server = http.createServer(recebeRequisicao);

server.listen(3000, '127.0.0.1', () => {
    console.log('Servidor rodando em http://127.0.0.1:3000/');
});
