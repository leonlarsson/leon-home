CREATE TABLE guestbook_entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    body VARCHAR(100) NOT NULL,
    name VARCHAR(50) DEFAULT NULL,
    email VARCHAR(150) DEFAULT NULL,
    deleted TINYINT DEFAULT NULL
);

CREATE TABLE journal_posts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL
);