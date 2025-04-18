const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

function servirArquivoHtml(resposta, nomeArquivo) {
  const caminho = path.join(__dirname, 'public', nomeArquivo); // <-- busca na pasta public
  fs.readFile(caminho, (erro, conteudo) => {
    if (erro) {
      resposta.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      resposta.end('<h1>404 - Página não encontrada</h1>');
    } else {
      resposta.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      resposta.end(conteudo);
    }
  });
}

const server = http.createServer((req, res) => {
  const rota = req.url;

  switch (rota) {
    case '/':
    case '/index':
      servirArquivoHtml(res, 'index.html');
      break;
    case '/produtos':
      servirArquivoHtml(res, 'produtos.html');
      break;
    case '/comprar':
      servirArquivoHtml(res, 'comprar.html');
      break;
    case '/sobre':
      servirArquivoHtml(res, 'sobre.html');
      break;
    case '/contato':
      servirArquivoHtml(res, 'contato.html');
      break;
    case '/faq':
      servirArquivoHtml(res, 'faq.html');
      break;
    default:
      servirArquivoHtml(res, 'erro.html'); // carrega erro.html da pasta public também
  }
});

server.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});
