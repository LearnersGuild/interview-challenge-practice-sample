DROP DATABASE IF EXISTS team_colors;
CREATE DATABASE team_colors;

\c team_colors

CREATE TABLE cities (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE colors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64)
);

CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) UNIQUE,
  mascot VARCHAR(64),
  city_id INTEGER REFERENCES cities
);

CREATE TABLE team_colors (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams,
  color_id INTEGER REFERENCES colors
);
