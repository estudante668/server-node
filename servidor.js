/**
 * 
 */
const http = require('http');


const host = 'localhost';
const port = 8000;

const dadosRequeridos = function (requisicao, resposta) {
	resposta.writeHead(200);
	resposta.write("funcão acionada");
	resposta.end();
};

const servidor = http.createServer(dadosRequeridos);
servidor.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
