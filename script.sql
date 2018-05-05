CREATE DATABASE IF NOT EXISTS koalla;

USE koalla;

CREATE TABLE IF NOT EXISTS login(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NULL,
	nome VARCHAR(200)  NULL,
	prontuario INT(8) NULL,
    senha VARCHAR(24) NULL
);

CREATE TABLE IF NOT EXISTS avaliacao(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	problema BOOLEAN DEFAULT FALSE,
	descricao VARCHAR(1024) NULL,
	id_reserva INT NOT NULL,
	CONSTRAINT fk_aval_rsv FOREIGN KEY (id_reserva)
	REFERENCES horario_reserva(id)
);

CREATE TABLE IF NOT EXISTS departamento(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NULL,
	acronimo VARCHAR(10) NULL
);

CREATE TABLE IF NOT EXISTS professor (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_departamento INT NOT NULL,
	id_login INT NOT NULL,
    siape INT(8) NULL,
	celular INT(12) NULL,
    CONSTRAINT fk_prof_dep FOREIGN KEY (id_departamento)
    REFERENCES departamento(id),
    CONSTRAINT fk_prof FOREIGN KEY (id_login)
    REFERENCES login(id)
);

CREATE TABLE IF NOT EXISTS curso(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NULL,
	semestral BOOLEAN NULL,
	id_departamento INT NOT NULL,
	CONSTRAINT fk_curso_dep FOREIGN KEY (id_departamento)
	REFERENCES departamento(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS disciplina(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NULL,
	acronimo VARCHAR(10) NULL,
	id_curso INT NOT NULL,
	CONSTRAINT fk_discp_curso FOREIGN KEY (id_curso)
	REFERENCES curso(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS reserva(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo ENUM('avulso', 'semestral', 'anual'),
	id_login INT NOT NULL,
	lab int(4) INT NULL,
	justificativa VARCHAR(512) NULL,
    `status` ENUM('andamento', 'aprovado', 'reprovado', 'fechado') NOT NULL,
	CONSTRAINT fk_rsv_login FOREIGN KEY (id_login)
	REFERENCES login(id)
);

CREATE TABLE IF NOT EXISTS horario(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	dt_inicio TIMESTAMP DEFAULT NOW(),
	dt_fim TIMESTAMP DEFAULT NOW(),
	sigla VARCHAR(2) NULL
);

CREATE TABLE IF NOT EXISTS horario_reserva(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	id_horario INT NOT NULL,
	id_reserva INT NOT NULL,
	dia TIMESTAMP DEFAULT NOW(),
	CONSTRAINT fk_hr_rsv FOREIGN KEY (id_horario)
	REFERENCES horario(id),
	CONSTRAINT fk_rsv_hr FOREIGN KEY (id_reserva)
	REFERENCES reserva(id)
);

CREATE TABLE IF NOT EXISTS calendario(
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
	tipo ENUM('1', '2', '3') NULL,
	dt_inicio TIMESTAMP DEFAULT NOW(),
	dt_fim TIMESTAMP DEFAULT NOW()
)