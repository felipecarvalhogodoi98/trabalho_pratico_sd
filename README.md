# Trabalho Prático de Sistemas Distribuídos: MySQL + Node.js + Docker

## Arquitetura
A arquitetura do projeto é baseada em contêineres Docker, com dois serviços principais:

- Node.js Service:
  - Contém a aplicação Node.js que se conecta ao banco de dados MySQL.
  - Pode ser construído a partir de uma imagem oficial do Node.js ou ser instalada no proprio server.

- MySQL Service:
  - Contém o servidor MySQL.
  - Pode ser construído a partir de uma imagem oficial do MySQL.
  - Configurações, como nome de usuário, senha e banco de dados, são fornecidas por meio de variáveis de ambiente no Docker Compose ou dockerfile.

  ## Instalação do Docker
  Para instalar o Docker deve-se seguir as instruções no site oficiao do Docker: <a href="https://docs.docker.com/get-docker/">Get Docker</a>. 

## Instalação do Node.js e NPM
Você pode baixar e instalar o Node e NPM seguindo as instruções no site oficial no NPM: <a href="https://docs.npmjs.com/downloading-and-installing-node-js-and-npm">Downloading and installing Node.js and npm</a>

## Executando o Projeto
1. Clone o repositorio

`git clone git@github.com:felipecarvalhogodoi98/1trabalho_pratico_sd.git`

2. Execute o Docker Compose para construir e iniciar os contêineres:

`docker-compose up -d`

3. Após o container ser construido e iniciado, acesse a aplicação em <a href="http://localhost:3000">http://localhost:3000</a>

`node app/index.js`

## Observações
- No diretorio /db existe uma configuração inicial para o banco, criando tabelas e inserindo alguns dados de teste.
- Não se esqueça de parar e remover os contêineres quando não estiver usando o projeto

`docker-compose down`


