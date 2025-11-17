const express = require('express');
// Definindo uso do framework express (módulo);
const path = require('path');
// Definindo uso do path (caminhos e diretórios);

const app = express();
// Transforma o express em um agente no programa;
app.use(express.static(path.join(__dirname, 'public')));
// Usa o express, define o uso do path e de diretórios (para arquivos estáticos como o HTML) e cria um caminho (pasta) 'public';
const port = process.env.PORT || 3000; 
// Define a porta (pega do ambiente ou usa 3000);
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)); 
// Inicia o servidor e avisa no console;