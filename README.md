# Desenvolvimento de APIs

# Projeto: Consumo de APIs Públicas (GoT & Rick and Morty)
Este projeto é uma página web simples que consome e exibe dados de duas APIs públicas: Game of Thrones (An API of Ice and Fire) e The Rick and Morty API.
A aplicação é servida por um back-end Node.js/Express, e o front-end, que é construído com HTML, CSS (Mobile-First) e JavaScript puro.

# APIs Utilizadas
Game of Thrones API
Endpoint (GET): https://anapioficeandfire.com/api/characters/{id}

The Rick and Morty API
Endpoint (GET): https://rickandmortyapi.com/api/character/{id}

# Como Rodar o Projeto
1. Pré-requisitos: Node.js (que inclui o npm) instalado.
2. Clone o Repositório (ou baixe os arquivos) com o Terminal no diretório desejado:
git clone https://github.com/lucassacrament0/RickAndMortyThrones_UNEX.git
cd RickAndMortyThrones_UNEX

3. Instale as Dependências digitando no Terminal: (Isso irá instalar o express)
npm install

4. Inicie o Servidor digitando no Terminal:
npm start
5. Abra a Página: Acesse http://localhost:3000 no navegador.

# Sobre o Projeto & Tecnologias
Este projeto foi construído para demonstrar o consumo de APIs REST de terceiros em um ambiente de servidor Node.js.
1. Back-end (server.js):
- Utiliza Node.js e Express.
- Utiliza express.static para servir o front-end da pasta /public.

2. Front-end (public/):
- Utiliza JavaScript puro (async/await) com a função fetch para buscar os dados das APIs.
- Utiliza manipulação de DOM (document.createElement, .appendChild, etc.) para exibir os dados na interface.
- O CSS é estruturado com o princípio Mobile First (layout de coluna única como padrão, com media query para telas maiores).

# Dados Acadêmicos
Alunos: Emerson L S Lima e Levi F O Baptista
Docente: Ramon M Paixão
Curso: Sistemas de Informação
Instituição: Centro Universitário de Excelência (UNEX)