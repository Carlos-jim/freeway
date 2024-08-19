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
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE,
  phone_number VARCHAR(255),
  password_hash VARCHAR(255)
);

CREATE TABLE reservations (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  flight_id BIGINT,
  passenger_id BIGINT,
  reservation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  status VARCHAR(255) NOT NULL,
  FOREIGN KEY (flight_id) REFERENCES flights(id),
  FOREIGN KEY (passenger_id) REFERENCES passengers(id)
);

CREATE TABLE seats (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  flight_id BIGINT,
  seat_number VARCHAR(255) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  FOREIGN KEY (flight_id) REFERENCES flights(id)
);
