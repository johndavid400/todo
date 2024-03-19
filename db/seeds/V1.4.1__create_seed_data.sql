INSERT INTO
    users (email, encrypted_password)
VALUES
    ('test@example.com', '5fc7c84d6213d760590ba8cd915194d1'),
    ('user@example.com', '02cc8fccb43bf34b56db4bf2d4463a88');

INSERT INTO
    categories (user_id, color_code, title)
VALUES
    (1, '#0076de', 'Chores'),
    (1, '#00de20', 'Shopping'),
    (2, '#bc0000', 'General');


INSERT INTO
    lists (user_id, category_id, title, created_at)
VALUES
    (1, 1, 'House Repairs', CURRENT_TIMESTAMP),
    (1, 2, 'Grocery list', CURRENT_TIMESTAMP),
    (2, 3, 'Chore list', CURRENT_TIMESTAMP);

INSERT INTO
    list_items (list_id, title, position, created_at)
VALUES
    (1, 'Fix door', 0, CURRENT_TIMESTAMP),
    (1, 'Replace mirror', 1, CURRENT_TIMESTAMP),
    (1, 'Fix the lawnmower', 2, CURRENT_TIMESTAMP),
    (2, 'milk', 0, CURRENT_TIMESTAMP),
    (2, 'bread', 1, CURRENT_TIMESTAMP),
    (2, 'butter', 2, CURRENT_TIMESTAMP),
    (3, 'fix drawer', 0, CURRENT_TIMESTAMP),
    (3, 'pick up dry cleaning', 1, CURRENT_TIMESTAMP),
    (3, 'walk the dog', 2, CURRENT_TIMESTAMP);
