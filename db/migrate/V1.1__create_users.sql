CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR NOT NULL,
    encrypted_password VARCHAR NOT NULL
);
