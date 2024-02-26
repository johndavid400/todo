
CREATE TABLE IF NOT EXISTS categories (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    color_code VARCHAR NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users (id)
);
