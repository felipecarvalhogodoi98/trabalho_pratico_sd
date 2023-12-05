# Trabalho Prático de Sistemas Distribuídos: MySQL + Node.js + Docker

## Arquitetura
A arquitetura do projeto é baseada em contêineres Docker, com dois serviços principais:

- Node.js Service:
  - Hospeda a aplicação Node.js responsável por interagir com o banco de dados MySQL.
  - Pode ser construído a partir de uma imagem oficial do Node.js ou ser instalada no proprio server.

- MySQL Service:
  - Contém o servidor MySQL.
  - Pode ser construído a partir de uma imagem oficial do MySQL.
  - Configurações, como nome de usuário, senha e banco de dados, são fornecidas por meio de variáveis de ambiente no Docker Compose ou dockerfile.

 A relação entre o contêiner do MySQL e o contêiner do Node.js é uma arquitetura de software. Esses contêineres são instâncias isoladas de aplicativos que podem ser implantadas, gerenciadas e escaladas independentemente.

O sistema final, acessado pelo usuário através do navegador, se apresenta como uma entidade única, apesar de ser, na verdade, um sistema distribuído. O Docker atua como um middleware, fornecendo uma camada abstrata que encapsula as aplicações em contêineres.

Essa arquitetura segue um modelo descentralizado, pois os contêineres são isolados e podem ser implantados em hosts distintos. Essa abordagem oferece benefícios como escalabilidade e redundância, proporcionando uma infraestrutura mais resiliente e flexível. O uso de variáveis de ambiente no Docker Compose ou Dockerfile contribui para a flexibilidade da configuração, permitindo adaptações conforme necessário durante a implantação e a manutenção do sistema.

## Instalação do Docker
  Para instalar o Docker deve-se seguir as instruções no site oficiao do Docker: <a href="https://docs.docker.com/get-docker/">Get Docker</a>.

## Executando o Projeto
1. Clone o repositorio

`git clone git@github.com:felipecarvalhogodoi98/1trabalho_pratico_sd.git`

2. Execute o Docker Compose para construir e iniciar os contêineres:

`docker-compose up -d`

3. Após o container ser construido e iniciado, acesse a aplicação em <a href="http://localhost:3000">http://localhost:3000</a>

## Observações
- No diretorio /db existe uma configuração inicial para o banco, criando tabelas e inserindo alguns dados de teste.
- Não se esqueça de parar e remover os contêineres quando não estiver usando o projeto

`docker-compose down`

- O Dockerfile é usado para construir imagens de contêineres individuais, especificando a configuração e os comandos necessários para a construção.

- O Docker Compose é usado para utilizar vários contêineres como uma aplicação única, definindo a configuração, relacionamentos e dependências entre eles em um arquivo YAML.

- O Dockerfile pode ser utilizado apenas para buildar as imagens e os containeres serem orquestrados pelo Docker Compose

