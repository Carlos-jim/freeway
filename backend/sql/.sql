create table airlines (
  id bigint primary key generated always as identity,
  name text not null,
  code text not null unique
);

create table flights (
  id bigint primary key generated always as identity,
  airline_id bigint references airlines (id),
  flight_number text not null,
  departure_airport text not null,
  arrival_airport text not null,
  departure_time timestamp with time zone not null,
  arrival_time timestamp with time zone not null
);

create table passengers (
  id bigint primary key generated always as identity,
  first_name text not null,
  last_name text not null,
  email text unique
);

create table reservations (
  id bigint primary key generated always as identity,
  flight_id bigint references flights (id),
  passenger_id bigint references passengers (id),
  reservation_date timestamp with time zone default now(),
  status text not null
);

create table seats (
  id bigint primary key generated always as identity,
  flight_id bigint references flights (id),
  seat_number text not null,
  is_available boolean default true
);

alter table passengers
add column phone_number text;