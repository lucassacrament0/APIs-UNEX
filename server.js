const express = require('express');
// Definindo uso do framework express (módulo);
const cors = require('cors');
// Definindo uso da ferramenta cors (mecanismo de segurança);
const bodyParser = require('body-parser');
// Definindo uso do body-parser (middleware);
const path = require('path');
// Definindo uso do path (caminhos e diretórios);

const app = express();
// Transforma o express em um agente no programa;
app.use(cors());
// Habilita o uso do cors;
app.use(bodyParser.json());
// Habilita o uso do body-parser (para entender JSON das requisições);

app.use(express.static(path.join(__dirname)));
// Usa o express e define o uso do path e de diretórios (para arquivos estáticos como o HTML);


let items = [ // Cria uma nova variável (items) que é um array;
{ id: 1, title: 'Item 1', body: 'Conteúdo 1' }, // Armazena os valores (um objeto)
{ id: 2, title: 'Item 2', body: 'Conteúdo 2' } // com id, title e body;
];
let nextId = 3; // Define o próximo item como "id: 3";


app.get('/api/items', (req, res) => { // Usa o GET para requerer/obter dados da variável;
res.json(items); // Retorna o resultado JSON de "items";
});


app.get('/api/items/:id', (req, res) => { // Usa o GET para obter um item;
const id = parseInt(req.params.id, 10); // Define o "string" para "int" no "id";
const item = items.find(i => i.id === id); // Cria "item" que busca o "id" solicitado de "items" (variável);
if (!item) return res.status(404).json({ error: 'Not found' }); // Se item não existe, erro 404;
res.json(item); // Retorna o resultado JSON de "item";
});


app.post('/api/items', (req, res) => { // Usa o POST para postar/cadastrar um item;
const { title, body } = req.body; // Cria "req.body" para necessitar de título e corpo da requisição;
if (!title) return res.status(400).json({ error: 'title is required' }); // Se não há título, erro 400;
const item = { id: nextId++, title, body }; // Cria o novo objeto "item" com o próximo ID;
items.push(item); // Adiciona o "item" ao array "items";
res.status(201).json(item); // Retorna o status 201 (Criado) e o item que foi criado;
});

// Update (Atualizar)
app.put('/api/items/:id', (req, res) => { // Usa o PUT para atualizar (por completo) um item existente pelo ID;
const id = parseInt(req.params.id, 10); // Define o "string" para "int" no "id";
const index = items.findIndex(i => i.id === id); // Encontra a posição (índice) do item no array;
if (index === -1) return res.status(404).json({ error: 'Not found' }); // Caso inexistente (índice -1), retorna erro 404;
const { title, body } = req.body; // Pega o novo título e corpo (para atualização) que vieram na requisição;
// Atualiza o item existente, substitui o title e/ou body;
items[index] = { ...items[index], title: title ?? items[index].title, body: body ?? items[index].body };
res.json(items[index]); // Retorna o item atualizado JSON;
});

// Delete (Remover)
app.delete('/api/items/:id', (req, res) => { // Usa o DELETE para remover um item pelo ID;
const id = parseInt(req.params.id, 10); // Define o "string" para "int" no "id";
const index = items.findIndex(i => i.id === id); // Encontra a posição (índice) do item no array;
if (index === -1) return res.status(404).json({ error: 'Not found' }); // Caso inexistente (índice -1), retorna erro 404;
const removed = items.splice(index, 1)[0]; // Remove 1 item do array e o guarda na variável "removed";
res.json(removed); // Retorna o item removido;
});

// Fallback to serve the html demo
app.get('/', (req, res) => { // Define a rota principal (raiz "/") do servidor;
A res.sendFile(path.join(__dirname, 'api-demo-express.html')); // Envia o arquivo HTML principal como resposta;
});

const port = process.env.PORT || 3000; // Define a porta (pega do ambiente ou usa 3000);
app.listen(port, () => console.log(`Server running on http://localhost:${port}`)); // Inicia o servidor e avisa no console;