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