INSERT INTO
    users (id, email, encrypted_password)
VALUES
    (1, 'test@example.com', '5fc7c84d6213d760590ba8cd915194d1'),
    (2, 'user@example.com', '02cc8fccb43bf34b56db4bf2d4463a88');

INSERT INTO
    categories (id, user_id, color_code, title)
VALUES
    (1, 1, '#0076de', 'Chores'),
    (2, 1, '#00de20', 'Shopping'),
    (3, 2, '#bc0000', 'General'),


INSERT INTO
    lists (id, user_id, category_id, title, created_at)
VALUES
    (1, 1, 1, 'House Repairs', CURRENT_TIMESTAMP),
    (2, 1, 2, 'Grocery list', CURRENT_TIMESTAMP),
    (3, 2, 3, 'Honey-do list', CURRRENT_TIMESTAMP),

INSERT INTO
    list_items (id, list_id, title, position)
VALUES
    (1, 1, 'Fix door', 0),
    (2, 1, 'Replace mirror', 1),
    (3, 1, 'Fix the lawnmower', 2),
    (4, 2, 'milk', 0),
    (5, 2, 'bread', 1),
    (6, 2, 'butter', 2),
    (7, 3, 'fix drawer', 0),
    (8, 3, 'pick up dry cleaning', 1),
    (9, 3, 'walk the dog', 2);