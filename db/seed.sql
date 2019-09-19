DROP TABLE IF EXISTS houses;

create table houses (
    houses_id SERIAL PRIMARY KEY,
    name VARCHAR(200),
    address VARCHAR(200),
    city VARCHAR(200),
    state VARCHAR(200),
    zipcode INTEGER
);

INSERT INTO houses (name, address, city, state, zipcode)
VALUES ('Tom Stone House', '684 S 520 W', 'Midwai', 'Utah', 84032),
('Barratt Home', '583 E 3215 N', 'Pravo', 'Utah', 84602),
('Tate Apartment', '500 W 100 S', 'Prooovo', 'Utah', 84064);

SELECT * FROM houses;