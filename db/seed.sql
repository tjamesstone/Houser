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
VALUES ('Stone residence', '100 Lane St', 'Provo', 'Utah', 84064),
('Barratt Home', '583 E', 'Provo', 'Utah', 84604),
('Stone Sr. Residence', '648 S 250 W', 'Midway', 'Utah', 84049);

SELECT * FROM houses