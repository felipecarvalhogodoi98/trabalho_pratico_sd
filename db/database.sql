USE meu_banco;

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE
);

INSERT INTO user (nome, data_nascimento, cpf) VALUES
  ('João Silva', '1990-01-15', '123.456.789-01'),
  ('Maria Oliveira', '1985-05-22', '987.654.321-09'),
  ('Carlos Pereira', '1988-11-08', '555.123.789-12');

CREATE TABLE vehicles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  chassi VARCHAR(255) NOT NULL UNIQUE,
  placa VARCHAR(10) NOT NULL,
  modelo VARCHAR(255) NOT NULL
);

INSERT INTO vehicles (chassi, placa, modelo) VALUES
  ('ABC12345678901234', 'XYZ-1234', 'Carro A'),
  ('DEF23456789012345', 'ABC-5678', 'Carro B'),
  ('GHI34567890123456', '123-XYZ', 'Carro C');