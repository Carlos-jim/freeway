CREATE DATABASE freeway;

USE freeway;

CREATE TABLE airlines (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE flights (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  airline_id BIGINT,
  flight_number VARCHAR(255) NOT NULL,
  departure_airport VARCHAR(255) NOT NULL,
  arrival_airport VARCHAR(255) NOT NULL,
  departure_time TIMESTAMP NOT NULL,
  arrival_time TIMESTAMP NOT NULL,
  flight_cost VARCHAR(255) NOT NULL,
  FOREIGN KEY (airline_id) REFERENCES airlines(id)
);

CREATE TABLE passengers (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) UNIQUE,
  password_hash VARCHAR(255),
  rol ENUM('user', 'admin')
);

CREATE TABLE reservations (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  flight_id BIGINT,
  user_id BIGINT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(255) NOT NULL,
  cedula VARCHAR(255) NOT NULL,
  reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(255) NOT NULL,
  confirmation BOOLEAN  NOT NULL,
  FOREIGN KEY (flight_id) REFERENCES flights(id),
  FOREIGN KEY (user_id) REFERENCES passengers(id)
);

CREATE TABLE seats (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  flight_id BIGINT,
  seat_number VARCHAR(255) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (flight_id) REFERENCES flights(id)
);


INSERT INTO airlines (name, code) VALUES ("FreewayAirlines", "AA20")

INSERT INTO flights(airline_id, flight_number, departure_airport, arrival_airport, departure_time, arrival_time,flight_cost) VALUES ("FreewayAirlines", "AA20", "Los roques", "Porlamar", "2024/10/24", "2024/10/30", "120" )