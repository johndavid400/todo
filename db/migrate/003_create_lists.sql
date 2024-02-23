CREATE TABLE IF NOT EXISTS lists (
    id SERIAL PRIMARY KEY NOT NULL,
    user_id INTEGER NOT NULL,
    category_id INTEGER,
    title VARCHAR NOT NULL,
    created_at TIMESTAMP NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users (id),
    FOREIGN KEY(category_id) REFERENCES category (id)
);