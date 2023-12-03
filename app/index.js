const mysql = require("mysql2");

// Configurações da conexão com o MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "meu_banco",
});

// Conectar ao MySQL
connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL");

  connection.query("SELECT * FROM user", (queryErr, results) => {
    if (queryErr) {
      console.error("Erro ao executar a consulta:", queryErr);
      return;
    }
    console.log("Resultado da consulta:", results);

    // Fechar a conexão após a consulta
    connection.end((endErr) => {
      if (endErr) {
        console.error("Erro ao fechar a conexão:", endErr);
        return;
      }
      console.log("Conexão fechada");
    });
  });
});
