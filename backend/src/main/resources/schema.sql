DROP TABLE IF EXISTS new_table;

CREATE TABLE IF NOT EXISTS new_table (
    id SERIAL NOT NULL,
    name varchar(100) NOT NULL,
    email varchar(100) DEFAULT NULL,
    PRIMARY KEY (id)
    )