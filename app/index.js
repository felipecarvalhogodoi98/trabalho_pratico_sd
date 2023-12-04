const mysql = require("mysql2");
const express = require("express");

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 3306,
  user: process.env.DATABASE_USER || "admin",
  password: process.env.DATABASE_PASSWORD || "admin",
  database: process.env.DATABASE_NAME || "meu_banco",
});

connection.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
  } else {
    console.log("Conexão ao MySQL estabelecida com sucesso!");
  }
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM user", (err, results) => {
    if (err) {
      console.error("Erro ao realizar a consulta:", err);
      res.status(500).send("Erro interno do servidor");
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
