/**
 * 
 */
const http = require('http');


const host = 'localhost';
const port = 8000;

const dadosRequeridos = function (requisicao, resposta) {
	resposta.writeHead(200, {'Content-Type': 'application/json'});
	resposta.write(`{"menssagem": "Está é uma resposta JSON"}`);
	resposta.end();
};

const servidor = http.createServer(dadosRequeridos);
servidor.listen(port, host, () => {
    console.log(`Servidor rodando no: http://${host}:${port}`);
});
