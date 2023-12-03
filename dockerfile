FROM mysql:latest


ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=meu_banco
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin

COPY ./db/database.sql

EXPOSE 3306

# Buildar a imagem
# docker build -t mysql-server .

# Executar o container
# docker run -d -p 3306:3306 --name mysql-container mysql-server



