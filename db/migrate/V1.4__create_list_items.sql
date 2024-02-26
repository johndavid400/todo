CREATE TABLE IF NOT EXISTS list_items (
    id SERIAL PRIMARY KEY NOT NULL,
    list_id INTEGER NOT NULL,
    title VARCHAR NOT NULL,
    position INTEGER NOT NULL,
    created_at TIMESTAMP NOT NULL,
    completed_at TIMESTAMP,
    FOREIGN KEY(list_id) REFERENCES lists (id)
);
