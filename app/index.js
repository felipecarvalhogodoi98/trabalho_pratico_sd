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

app.use(express.json());

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

app.post("/users", (req, res) => {
  const { nome, dataNascimento, cpf } = req.body;
  const query =
    "INSERT INTO user (nome, data_nascimento, cpf) VALUES (?, ?, ?)";
  connection.query(query, [nome, dataNascimento, cpf], (err, result) => {
    if (err) {
      console.error("Erro ao criar usuário:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.status(201).json({ id: result.insertId });
    }
  });
});

app.get("/users", (req, res) => {
  const query = "SELECT * FROM user";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao obter usuários:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(results);
    }
  });
});

app.get("/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = "SELECT * FROM user WHERE id = ?";
  connection.query(query, [userId], (err, results) => {
    if (err) {
      console.error("Erro ao obter usuário por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Usuário não encontrado" });
    } else {
      res.json(results[0]);
    }
  });
});

app.put("/users/:id", (req, res) => {
  const userId = req.params.id;
  const { nome, dataNascimento, cpf } = req.body;
  const query =
    "UPDATE user SET nome = ?, data_nascimento = ?, cpf = ? WHERE id = ?";
  connection.query(query, [nome, dataNascimento, cpf, userId], (err) => {
    if (err) {
      console.error("Erro ao atualizar usuário por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ success: true });
    }
  });
});

app.delete("/users/:id", (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM user WHERE id = ?";
  connection.query(query, [userId], (err) => {
    if (err) {
      console.error("Erro ao excluir usuário por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ success: true });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});


app.get("/vehicles/list", (req, res) => {
  const query = "SELECT * FROM vehicles";
  connection.query(query, (err, results) => {
    if (err) {
      console.error("Erro ao obter os veículos:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json(results);
    }
  });
});

app.post("/vehicles/insert", (req, res) => {
  const { chassi, placa, modelo } = req.body;
  const query =
    "INSERT INTO vehicles (chassi, placa, modelo) VALUES (?, ?, ?)";
  connection.query(query, [chassi, placa, modelo], (err, result) => {
    if (err) {
      console.error("Erro ao criar o veículo:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.status(201).json({ id: result.insertId });
    }
  });
});

app.get("/vehicles/select/:id", (req, res) => {
  const vehicleID = req.params.id;
  const query = "SELECT * FROM vehicles WHERE id = ?";
  connection.query(query, [vehicleID], (err, results) => {
    if (err) {
      console.error("Erro ao obter o veículo por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else if (results.length === 0) {
      res.status(404).json({ error: "Veículo não encontrado" });
    } else {
      res.json(results[0]);
    }
  });
});

app.put("/vehicles/update/:id", (req, res) => {
  const vehicleID = req.params.id;
  const { chassi, placa, modelo } = req.body;
  const query =
    "UPDATE vehicles SET chassi = ?, placa = ?, modelo = ? WHERE id = ?";
  connection.query(query, [chassi, placa, modelo, vehicleID], (err) => {
    if (err) {
      console.error("Erro ao atualizar o veículo por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ success: true });
    }
  });
});

app.delete("/vehicles/delete/:id", (req, res) => {
  const vehicleID = req.params.id;
  const query = "DELETE FROM vehicles WHERE id = ?";
  connection.query(query, [vehicleID], (err) => {
    if (err) {
      console.error("Erro ao excluir o veículo por ID:", err);
      res.status(500).json({ error: "Erro interno do servidor" });
    } else {
      res.json({ success: true });
    }
  });
});