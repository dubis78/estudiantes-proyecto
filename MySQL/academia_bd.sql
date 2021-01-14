USE academia;

DROP TABLE IF EXISTS actores;
DROP TABLE IF EXISTS tipo_documento;
DROP TABLE IF EXISTS tipo_actores;
DROP TABLE IF EXISTS estado_actores;
DROP TABLE IF EXISTS modulos;

CREATE TABLE tipo_documento(
    codigo VARCHAR(3) PRIMARY KEY,
    descripcion VARCHAR(100) NOT NULL
);

CREATE TABLE tipo_actores(
    id INT(5) UNSIGNED AUTO_INCREMENT,
    perfil VARCHAR(100),
    PRIMARY KEY(id)
);

CREATE TABLE estado_actores(
    id INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    estado VARCHAR(30)    
)ENGINE = INNODB;

CREATE TABLE modulos(
    id INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    modulo VARCHAR(255),
    `mod` VARCHAR(10)
);

-- ALTER TABLE modulos
-- ADD PRIMARY KEY(id);

CREATE TABLE actores(
    id INT(5) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    documento VARCHAR(20) UNIQUE NOT NULL,
    tipo_documento VARCHAR(3) NOT NULL,
    nombres VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255),
    contrasena VARCHAR(100) NOT NULL,
    correo VARCHAR(255) NOT NULL DEFAULT 'correo@dominio.com',
    telefono_celular VARCHAR(30) COMMENT 'Teléfono celular del estuiante',
    numero_expediente VARCHAR(255) NOT NULL UNIQUE,
    genero ENUM('hombre', 'mujer') NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    estado_actor_id INT(5) UNSIGNED,
    institucion_id INT(5),
    tipo_actor_id INT(5) UNSIGNED,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (estado_actor_id) REFERENCES estado_actores(id)
);