/**
 * 
 */
const http = require('http');
const fr = require('fs');


const host = 'localhost';
const port = 8000;

const dadosRequeridos = (requisicao, resposta) => {
	fr.readFile('pagina.html', (err, dados)=>{
		resposta.writeHead(200, {'Content-Type': 'text/html'});
	    resposta.write(dados);
		resposta.end();
	})
};

const servidor = http.createServer(dadosRequeridos);

 servidor.listen(port, host, () => {
    console.log(`Servidor rodando no: http://${host}:${port}`);
});
