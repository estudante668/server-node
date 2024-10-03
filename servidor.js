/**
 * 
 */
const http = require('http');
const url = require('url');


const host = 'localhost';
const port = 8000;

const dadosRequeridos = function (requisicao, resposta) {
	resposta.writeHead(200, {'Content-Type': 'text/html'});
	let d = url.parse(requisicao.url, true).query;
	let txt= d.mes + " " + d.ano;
	resposta.write(txt);
	resposta.end();
};

const servidor = http.createServer(dadosRequeridos);

 servidor.listen(port, host, () => {
    console.log(`Servidor rodando no: http://${host}:${port}`);
});
